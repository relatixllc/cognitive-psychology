import type { CalcConfig, CalcOutput, StatRow } from "./CalcShell";

/* ── Helpers ── */
function pct(n: number): string { return (n * 100).toFixed(2) + "%"; }
function f4(n: number): string  { return n.toFixed(4); }
function f2(n: number): string  { return n.toFixed(2); }

function parseCsv(raw: string, cols: number, header: RegExp): string[][] | string {
  const lines = raw.trim().split("\n").map(l => l.trim()).filter(l => l.length > 0);
  const start = header.test(lines[0]) ? 1 : 0;
  const rows: string[][] = [];
  for (let i = start; i < lines.length; i++) {
    const parts = lines[i].split(",").map(s => s.trim().toLowerCase());
    if (parts.length < cols) return `Row ${i + 1}: expected ${cols} comma-separated values.`;
    rows.push(parts);
  }
  if (rows.length === 0) return "No data rows found.";
  return rows;
}

// ═══════════════════════════════════════════════════════
// 1. Working Memory — Memory Span
// ═══════════════════════════════════════════════════════
const workingMemory: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a digit-span trial: <code>trial_length</code> (number of items) and <code>correct</code> (yes or no). The calculator computes memory span as the longest sequence length at which the participant achieves &ge;50% accuracy.`,
  defaultData: `trial_length,correct
3,yes
3,yes
3,yes
3,yes
4,yes
4,yes
4,yes
4,no
5,yes
5,yes
5,no
5,yes
6,yes
6,no
6,yes
6,no
7,yes
7,no
7,no
7,no
8,no
8,no
8,yes
8,no
9,no
9,no
9,no
9,no
3,yes
4,yes
5,yes
5,no
6,no
6,yes
7,no
7,no`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^trial/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const len = parseInt(r[i][0], 10);
      if (isNaN(len) || len < 1) return `Row ${i+1}: trial_length must be a positive integer.`;
      if (!["yes","no"].includes(r[i][1])) return `Row ${i+1}: correct must be yes or no.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const totalCorrect = R.filter(r => r[1] === "yes").length;
    const overallAcc = totalCorrect / n;

    // Group by trial length
    const groups = new Map<number, { total: number; correct: number }>();
    for (const r of R) {
      const len = parseInt(r[0], 10);
      if (!groups.has(len)) groups.set(len, { total: 0, correct: 0 });
      const g = groups.get(len)!;
      g.total++;
      if (r[1] === "yes") g.correct++;
    }

    const sortedLengths = [...groups.keys()].sort((a, b) => a - b);
    const lengthRows: StatRow[] = [];
    let memorySpan = 0;
    for (const len of sortedLengths) {
      const g = groups.get(len)!;
      const acc = g.correct / g.total;
      lengthRows.push({
        label: `Length ${len} (n=${g.total})`,
        value: `${g.correct}/${g.total} correct (${pct(acc)})`,
        accent: acc >= 0.5,
      });
      if (acc >= 0.5) memorySpan = len;
    }

    // Interpolated span: find the transition point
    let interpolatedSpan = memorySpan;
    if (memorySpan > 0 && groups.has(memorySpan + 1)) {
      const gAt = groups.get(memorySpan)!;
      const gAbove = groups.get(memorySpan + 1)!;
      const accAt = gAt.correct / gAt.total;
      const accAbove = gAbove.correct / gAbove.total;
      if (accAt > accAbove && accAt !== accAbove) {
        interpolatedSpan = memorySpan + (accAt - 0.5) / (accAt - accAbove);
      }
    }

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "Memory Span", value: memorySpan },
        { label: "Interpolated Span", value: f2(interpolatedSpan) },
        { label: "Overall Accuracy", value: pct(overallAcc) },
      ],
      sections: [
        { title: "Accuracy by Sequence Length", rows: lengthRows },
        { title: "Memory Span Estimate", highlight: true, rows: [
          { label: "Memory span (longest \u226550% correct)", value: `${memorySpan} items`, accent: true },
          { label: "Interpolated span", value: `${f2(interpolatedSpan)} items` },
          { label: "Classification", value: memorySpan >= 7 ? "Above average (\u22657 items)" : memorySpan >= 5 ? "Average (5\u20136 items)" : "Below average (<5 items)", accent: true },
          { label: "Miller's magic number reference", value: "7 \u00B1 2 items" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `Length ${r[0]}: ${r[1]}`, cls: r[1] === "yes" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Forgetting Curve — Ebbinghaus
// ═══════════════════════════════════════════════════════
const forgettingCurve: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row records a retention test: <code>delay_hours</code> (time since learning) and <code>retention_pct</code> (percentage retained, 0\u2013100). The calculator fits Ebbinghaus's forgetting curve R = a &middot; t<sup>\u2212b</sup> using log-linear regression and estimates the half-life of memory.`,
  defaultData: `delay_hours,retention_pct
0.33,95
0.5,90
1,75
2,68
4,58
6,52
8,48
12,44
24,36
48,30
72,27
96,25
120,23
168,21
240,19
336,18
504,16
672,15
0.33,93
0.5,88
1,72
2,65
4,55
8,46
24,34
48,28
72,26
168,20
336,17
672,14`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^delay/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const delay = parseFloat(r[i][0]);
      const ret = parseFloat(r[i][1]);
      if (isNaN(delay) || delay <= 0) return `Row ${i+1}: delay_hours must be a positive number.`;
      if (isNaN(ret) || ret < 0 || ret > 100) return `Row ${i+1}: retention_pct must be between 0 and 100.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const data = R.map(r => ({ t: parseFloat(r[0]), ret: parseFloat(r[1]) }));

    // Fit R = a * t^(-b) => ln(R) = ln(a) - b*ln(t)
    const logT = data.map(d => Math.log(d.t));
    const logR = data.map(d => Math.log(d.ret / 100));

    const meanLogT = logT.reduce((a, b) => a + b, 0) / n;
    const meanLogR = logR.reduce((a, b) => a + b, 0) / n;

    let ssXY = 0, ssXX = 0, ssYY = 0;
    for (let i = 0; i < n; i++) {
      ssXY += (logT[i] - meanLogT) * (logR[i] - meanLogR);
      ssXX += (logT[i] - meanLogT) ** 2;
      ssYY += (logR[i] - meanLogR) ** 2;
    }

    const b = ssXX > 0 ? -(ssXY / ssXX) : 0; // negative slope is decay rate
    const lnA = meanLogR + (ssXY / ssXX) * meanLogT;
    const a = Math.exp(lnA) * 100; // scale back to percentage

    // R-squared
    const rSquared = ssXX > 0 && ssYY > 0 ? (ssXY ** 2) / (ssXX * ssYY) : 0;

    // Half-life: a * t^(-b) = a/2 => t^(-b) = 0.5 => t = 0.5^(-1/b) = 2^(1/b)
    const halfLife = b > 0 ? Math.pow(2, 1 / b) : Infinity;

    // Predicted retention at key timepoints
    const predict = (t: number) => a * Math.pow(t, -b);
    const timepoints = [1, 24, 168, 720]; // 1hr, 1day, 1wk, 1mo
    const predRows: StatRow[] = timepoints.map(t => ({
      label: t === 1 ? "1 hour" : t === 24 ? "1 day" : t === 168 ? "1 week" : "1 month",
      value: `${f2(Math.min(100, Math.max(0, predict(t))))}%`,
    }));

    // Residuals
    const residuals = data.map(d => d.ret - Math.min(100, Math.max(0, a * Math.pow(d.t, -b))));
    const rmse = Math.sqrt(residuals.reduce((s, r) => s + r ** 2, 0) / n);

    return {
      cards: [
        { label: "Data Points", value: n },
        { label: "Decay Rate (b)", value: f4(b) },
        { label: "R\u00B2", value: f4(rSquared) },
        { label: "Half-life", value: halfLife < 10000 ? `${f2(halfLife)} hrs` : "\u221E" },
      ],
      sections: [
        { title: "Fitted Parameters (R = a \u00B7 t^(\u2212b))", highlight: true, rows: [
          { label: "a (initial retention scale)", value: `${f2(a)}%` },
          { label: "b (decay exponent)", value: f4(b), accent: true },
          { label: "R\u00B2 (goodness of fit)", value: f4(rSquared) },
          { label: "RMSE", value: `${f2(rmse)} pp` },
        ]},
        { title: "Predicted Retention", rows: predRows },
        { title: "Memory Half-life", highlight: true, rows: [
          { label: "Half-life (time to 50% retention)", value: halfLife < 10000 ? `${f2(halfLife)} hours` : "Very long (> 10,000 hours)", accent: true },
          { label: "Forgetting speed", value: b > 0.5 ? "Rapid forgetting (b > 0.5)" : b > 0.3 ? "Moderate forgetting" : "Slow forgetting (b < 0.3)" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const delay = parseFloat(r[0]);
    const ret = parseFloat(r[1]);
    const timeLabel = delay < 1 ? `${Math.round(delay * 60)}min` : delay < 24 ? `${f2(delay)}hr` : `${Math.round(delay / 24)}d`;
    return { text: `${timeLabel}: ${ret}% retained`, cls: ret >= 50 ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 3. Short-Term Memory — Serial Position Effect
// ═══════════════════════════════════════════════════════
const shortTermMemory: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents an item in a free-recall task: <code>position</code> (serial position in the list, starting from 1) and <code>recalled</code> (yes or no). The calculator identifies primacy and recency effects by comparing recall rates at different serial positions.`,
  defaultData: `position,recalled
1,yes
2,yes
3,yes
4,no
5,no
6,no
7,no
8,no
9,yes
10,yes
1,yes
2,yes
3,no
4,no
5,no
6,no
7,no
8,yes
9,yes
10,yes
1,yes
2,no
3,yes
4,no
5,no
6,yes
7,no
8,no
9,yes
10,yes
1,yes
2,yes
3,no
4,no
5,no
6,no
7,no
8,no
9,yes
10,yes`,
  minRows: 5,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^pos/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const pos = parseInt(r[i][0], 10);
      if (isNaN(pos) || pos < 1) return `Row ${i+1}: position must be a positive integer.`;
      if (!["yes","no"].includes(r[i][1])) return `Row ${i+1}: recalled must be yes or no.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const totalRecalled = R.filter(r => r[1] === "yes").length;
    const overallAcc = totalRecalled / n;

    // Group by position
    const groups = new Map<number, { total: number; recalled: number }>();
    for (const r of R) {
      const pos = parseInt(r[0], 10);
      if (!groups.has(pos)) groups.set(pos, { total: 0, recalled: 0 });
      const g = groups.get(pos)!;
      g.total++;
      if (r[1] === "yes") g.recalled++;
    }

    const sortedPos = [...groups.keys()].sort((a, b) => a - b);
    const maxPos = Math.max(...sortedPos);
    const posRows: StatRow[] = [];
    for (const pos of sortedPos) {
      const g = groups.get(pos)!;
      const acc = g.recalled / g.total;
      posRows.push({
        label: `Position ${pos}`,
        value: `${g.recalled}/${g.total} (${pct(acc)})`,
        accent: acc >= 0.7,
      });
    }

    // Define primacy (first 3), middle, recency (last 3) regions
    const primacyPositions = sortedPos.filter(p => p <= 3);
    const recencyPositions = sortedPos.filter(p => p >= maxPos - 2);
    const middlePositions = sortedPos.filter(p => p > 3 && p < maxPos - 2);

    const regionAcc = (positions: number[]) => {
      let tot = 0, rec = 0;
      for (const p of positions) {
        const g = groups.get(p)!;
        tot += g.total;
        rec += g.recalled;
      }
      return tot > 0 ? rec / tot : 0;
    };

    const primacyAcc = regionAcc(primacyPositions);
    const middleAcc = regionAcc(middlePositions);
    const recencyAcc = regionAcc(recencyPositions);

    const primacyEffect = primacyAcc - middleAcc;
    const recencyEffect = recencyAcc - middleAcc;

    return {
      cards: [
        { label: "Total Items", value: n },
        { label: "Overall Recall", value: pct(overallAcc) },
        { label: "Primacy Effect", value: `+${f2(primacyEffect * 100)} pp` },
        { label: "Recency Effect", value: `+${f2(recencyEffect * 100)} pp` },
      ],
      sections: [
        { title: "Recall by Serial Position", rows: posRows },
        { title: "Region Averages", rows: [
          { label: `Primacy (positions ${primacyPositions.join(", ") || "n/a"})`, value: pct(primacyAcc) },
          { label: `Middle (positions ${middlePositions.join(", ") || "n/a"})`, value: pct(middleAcc) },
          { label: `Recency (positions ${recencyPositions.join(", ") || "n/a"})`, value: pct(recencyAcc) },
        ]},
        { title: "Serial Position Effects", highlight: true, rows: [
          { label: "Primacy effect (primacy \u2212 middle)", value: `${f2(primacyEffect * 100)} percentage points`, accent: true },
          { label: "Recency effect (recency \u2212 middle)", value: `${f2(recencyEffect * 100)} percentage points`, accent: true },
          { label: "Primacy interpretation", value: primacyEffect > 0.15 ? "Strong primacy effect" : primacyEffect > 0.05 ? "Moderate primacy effect" : "Weak or no primacy effect" },
          { label: "Recency interpretation", value: recencyEffect > 0.15 ? "Strong recency effect" : recencyEffect > 0.05 ? "Moderate recency effect" : "Weak or no recency effect" },
          { label: "U-shaped curve", value: primacyEffect > 0.05 && recencyEffect > 0.05 ? "Classic U-shape detected (both effects present)" : "No clear U-shape" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `Pos ${r[0]}: ${r[1] === "yes" ? "recalled" : "forgotten"}`, cls: r[1] === "yes" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const memoryCalcs: Record<string, CalcConfig> = {
  Working_Memory: workingMemory,
  Forgetting_Curve: forgettingCurve,
  Short_Term_Memory: shortTermMemory,
};
