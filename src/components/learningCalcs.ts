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
// 1. Classical Conditioning — Acquisition Curve
// ═══════════════════════════════════════════════════════
const classicalConditioning: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a conditioning trial: <code>trial</code> (trial number) and <code>cr_strength</code> (conditioned response strength, 0\u2013100). The calculator fits the Rescorla-Wagner learning curve CR = A(1 \u2212 e<sup>\u2212\u03B1t</sup>) to estimate the asymptote and learning rate.`,
  defaultData: `trial,cr_strength
1,5
2,12
3,18
4,25
5,30
6,38
7,42
8,48
9,52
10,55
11,60
12,62
13,65
14,68
15,70
16,72
17,74
18,75
19,76
20,78
21,79
22,80
23,80
24,81
25,82
26,82
27,83
28,83
29,83
30,84`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^trial/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const trial = parseInt(r[i][0], 10);
      const cr = parseFloat(r[i][1]);
      if (isNaN(trial) || trial < 1) return `Row ${i+1}: trial must be a positive integer.`;
      if (isNaN(cr) || cr < 0 || cr > 100) return `Row ${i+1}: cr_strength must be between 0 and 100.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const data = R.map(r => ({ trial: parseInt(r[0], 10), cr: parseFloat(r[1]) }));

    // Estimate asymptote A as approximately max CR observed (with margin)
    const maxCR = Math.max(...data.map(d => d.cr));
    const minCR = Math.min(...data.map(d => d.cr));
    const meanCR = data.reduce((s, d) => s + d.cr, 0) / n;

    // Fit CR = A(1 - e^(-alpha*t)) using grid search for alpha
    // Use last few trials to estimate asymptote
    const lastTrials = data.slice(-Math.max(3, Math.floor(n * 0.2)));
    const estimatedA = lastTrials.reduce((s, d) => s + d.cr, 0) / lastTrials.length * 1.05;
    const A = Math.max(estimatedA, maxCR);

    // Find best alpha by minimizing SSE
    let bestAlpha = 0.1;
    let bestSSE = Infinity;
    for (let alpha = 0.01; alpha <= 1.0; alpha += 0.005) {
      let sse = 0;
      for (const d of data) {
        const predicted = A * (1 - Math.exp(-alpha * d.trial));
        sse += (d.cr - predicted) ** 2;
      }
      if (sse < bestSSE) { bestSSE = sse; bestAlpha = alpha; }
    }

    // Compute R-squared
    const ssTot = data.reduce((s, d) => s + (d.cr - meanCR) ** 2, 0);
    const rSquared = ssTot > 0 ? 1 - bestSSE / ssTot : 0;

    // Trials to reach 50% and 90% of asymptote
    const trialsTo50 = bestAlpha > 0 ? -Math.log(0.5) / bestAlpha : Infinity;
    const trialsTo90 = bestAlpha > 0 ? -Math.log(0.1) / bestAlpha : Infinity;

    // Phase analysis: early (first third), middle, late
    const third = Math.max(1, Math.floor(n / 3));
    const early = data.slice(0, third);
    const middle = data.slice(third, 2 * third);
    const late = data.slice(2 * third);
    const earlyMean = early.reduce((s, d) => s + d.cr, 0) / early.length;
    const middleMean = middle.reduce((s, d) => s + d.cr, 0) / middle.length;
    const lateMean = late.reduce((s, d) => s + d.cr, 0) / late.length;

    return {
      cards: [
        { label: "Trials", value: n },
        { label: "Asymptote (A)", value: f2(A) },
        { label: "Learning Rate (\u03B1)", value: f4(bestAlpha) },
        { label: "R\u00B2", value: f4(rSquared) },
      ],
      sections: [
        { title: "Learning Curve Fit (CR = A(1 \u2212 e^(\u2212\u03B1t)))", highlight: true, rows: [
          { label: "Asymptote (A)", value: f2(A), accent: true },
          { label: "Learning rate (\u03B1)", value: f4(bestAlpha), accent: true },
          { label: "R\u00B2", value: f4(rSquared) },
          { label: "RMSE", value: f2(Math.sqrt(bestSSE / n)) },
        ]},
        { title: "Learning Milestones", rows: [
          { label: "Trials to 50% of asymptote", value: f2(trialsTo50) },
          { label: "Trials to 90% of asymptote", value: f2(trialsTo90) },
        ]},
        { title: "Phase Analysis", rows: [
          { label: `Early phase (trials 1\u2013${third})`, value: `Mean CR = ${f2(earlyMean)}` },
          { label: `Middle phase (trials ${third+1}\u2013${2*third})`, value: `Mean CR = ${f2(middleMean)}` },
          { label: `Late phase (trials ${2*third+1}\u2013${n})`, value: `Mean CR = ${f2(lateMean)}` },
        ]},
        { title: "Interpretation", rows: [
          { label: "Learning speed", value: bestAlpha > 0.2 ? "Fast acquisition (\u03B1 > 0.2)" : bestAlpha > 0.1 ? "Moderate acquisition" : "Slow acquisition (\u03B1 < 0.1)" },
          { label: "Asymptotic behavior", value: lateMean / A > 0.9 ? "Nearing asymptote (>90%)" : lateMean / A > 0.7 ? "Approaching asymptote (70\u201390%)" : "Still acquiring (<70%)" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const cr = parseFloat(r[1]);
    return { text: `Trial ${r[0]}: CR=${cr}`, cls: cr >= 50 ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Spacing Effect — Massed vs. Spaced Practice
// ═══════════════════════════════════════════════════════
const spacingEffect: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a participant's test score: <code>spacing</code> (massed or spaced) and <code>score</code> (0\u2013100). The calculator computes the spacing advantage and effect size comparing massed vs. spaced practice conditions.`,
  defaultData: `spacing,score
massed,62
massed,58
massed,65
massed,60
massed,55
massed,63
massed,57
massed,61
massed,59
massed,64
massed,56
massed,60
massed,58
massed,62
massed,54
spaced,78
spaced,82
spaced,75
spaced,80
spaced,85
spaced,77
spaced,81
spaced,79
spaced,83
spaced,76
spaced,84
spaced,80
spaced,78
spaced,82
spaced,74`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^spac/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["massed","spaced"].includes(r[i][0])) return `Row ${i+1}: spacing must be massed or spaced.`;
      const score = parseFloat(r[i][1]);
      if (isNaN(score) || score < 0 || score > 100) return `Row ${i+1}: score must be between 0 and 100.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const massed = R.filter(r => r[0] === "massed").map(r => parseFloat(r[1]));
    const spaced = R.filter(r => r[0] === "spaced").map(r => parseFloat(r[1]));
    if (massed.length === 0 || spaced.length === 0)
      return "Need both massed and spaced conditions.";

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = (arr: number[]) => {
      const m = mean(arr);
      return Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1));
    };

    const mMassed = mean(massed);
    const mSpaced = mean(spaced);
    const sdMassed = sd(massed);
    const sdSpaced = sd(spaced);
    const spacingAdv = mSpaced - mMassed;
    const pooledSD = Math.sqrt(((massed.length - 1) * sdMassed ** 2 + (spaced.length - 1) * sdSpaced ** 2) / (massed.length + spaced.length - 2));
    const cohensD = pooledSD > 0 ? spacingAdv / pooledSD : 0;
    const pctImprovement = mMassed > 0 ? (spacingAdv / mMassed) * 100 : 0;

    return {
      cards: [
        { label: "Total Participants", value: n },
        { label: "Spacing Advantage", value: `${f2(spacingAdv)} pts` },
        { label: "Cohen's d", value: f2(cohensD) },
        { label: "% Improvement", value: `${f2(pctImprovement)}%` },
      ],
      sections: [
        { title: "Massed Practice", rows: [
          { label: "N", value: `${massed.length}` },
          { label: "Mean score", value: f2(mMassed) },
          { label: "SD", value: f2(sdMassed) },
          { label: "Range", value: `${f2(Math.min(...massed))} \u2013 ${f2(Math.max(...massed))}` },
        ]},
        { title: "Spaced Practice", rows: [
          { label: "N", value: `${spaced.length}` },
          { label: "Mean score", value: f2(mSpaced) },
          { label: "SD", value: f2(sdSpaced) },
          { label: "Range", value: `${f2(Math.min(...spaced))} \u2013 ${f2(Math.max(...spaced))}` },
        ]},
        { title: "Spacing Effect", highlight: true, rows: [
          { label: "Spacing advantage (spaced \u2212 massed)", value: `${f2(spacingAdv)} points`, accent: true },
          { label: "Relative improvement", value: `${f2(pctImprovement)}%` },
          { label: "Pooled SD", value: f2(pooledSD) },
          { label: "Cohen's d", value: f2(cohensD), accent: true },
          { label: "Effect size interpretation", value: Math.abs(cohensD) >= 0.8 ? "Large (|d| \u2265 0.8)" : Math.abs(cohensD) >= 0.5 ? "Medium (0.5 \u2264 |d| < 0.8)" : "Small (|d| < 0.5)" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]}: ${r[1]} pts`, cls: r[0] === "spaced" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const learningCalcs: Record<string, CalcConfig> = {
  Classical_Conditioning: classicalConditioning,
  Spacing_Effect: spacingEffect,
};
