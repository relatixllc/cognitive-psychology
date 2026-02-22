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
// 1. Stroop Effect — Interference Calculator
// ═══════════════════════════════════════════════════════
const stroopEffect: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a Stroop trial: <code>condition</code> (congruent or incongruent) and <code>reaction_time</code> (in ms). The calculator computes the Stroop interference effect, mean RT per condition, and effect size (Cohen's d).`,
  defaultData: `condition,reaction_time
congruent,620
congruent,580
congruent,610
congruent,595
congruent,640
congruent,605
congruent,590
congruent,615
congruent,600
congruent,625
congruent,585
congruent,610
congruent,630
congruent,595
congruent,605
incongruent,780
incongruent,820
incongruent,760
incongruent,810
incongruent,790
incongruent,830
incongruent,775
incongruent,805
incongruent,815
incongruent,770
incongruent,795
incongruent,840
incongruent,785
incongruent,800
incongruent,825`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^cond/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["congruent","incongruent"].includes(r[i][0])) return `Row ${i+1}: condition must be congruent or incongruent.`;
      const rt = parseFloat(r[i][1]);
      if (isNaN(rt) || rt <= 0) return `Row ${i+1}: reaction_time must be a positive number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const congruent = R.filter(r => r[0] === "congruent").map(r => parseFloat(r[1]));
    const incongruent = R.filter(r => r[0] === "incongruent").map(r => parseFloat(r[1]));
    if (congruent.length === 0 || incongruent.length === 0)
      return "Need both congruent and incongruent trials.";

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = (arr: number[]) => {
      const m = mean(arr);
      return Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1));
    };

    const mCon = mean(congruent);
    const mInc = mean(incongruent);
    const sdCon = sd(congruent);
    const sdInc = sd(incongruent);
    const stroopEffect = mInc - mCon;
    const pooledSD = Math.sqrt(((congruent.length - 1) * sdCon ** 2 + (incongruent.length - 1) * sdInc ** 2) / (congruent.length + incongruent.length - 2));
    const cohensD = pooledSD > 0 ? stroopEffect / pooledSD : 0;
    const interferencePct = mCon > 0 ? (stroopEffect / mCon) * 100 : 0;

    const minCon = Math.min(...congruent);
    const maxCon = Math.max(...congruent);
    const minInc = Math.min(...incongruent);
    const maxInc = Math.max(...incongruent);

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "Stroop Effect", value: `${f2(stroopEffect)} ms` },
        { label: "Cohen's d", value: f2(cohensD) },
        { label: "Interference %", value: `${f2(interferencePct)}%` },
      ],
      sections: [
        { title: "Congruent Trials", rows: [
          { label: "N trials", value: `${congruent.length}` },
          { label: "Mean RT", value: `${f2(mCon)} ms` },
          { label: "SD", value: `${f2(sdCon)} ms` },
          { label: "Range", value: `${f2(minCon)} \u2013 ${f2(maxCon)} ms` },
        ]},
        { title: "Incongruent Trials", rows: [
          { label: "N trials", value: `${incongruent.length}` },
          { label: "Mean RT", value: `${f2(mInc)} ms` },
          { label: "SD", value: `${f2(sdInc)} ms` },
          { label: "Range", value: `${f2(minInc)} \u2013 ${f2(maxInc)} ms` },
        ]},
        { title: "Stroop Interference", highlight: true, rows: [
          { label: "Effect = Mean(Inc) \u2212 Mean(Con)", value: `${f2(stroopEffect)} ms`, accent: true },
          { label: "Interference cost (% of congruent RT)", value: `${f2(interferencePct)}%` },
          { label: "Pooled SD", value: `${f2(pooledSD)} ms` },
          { label: "Cohen's d", value: f2(cohensD), accent: true },
          { label: "Effect size interpretation", value: Math.abs(cohensD) >= 0.8 ? "Large (|d| \u2265 0.8)" : Math.abs(cohensD) >= 0.5 ? "Medium (0.5 \u2264 |d| < 0.8)" : "Small (|d| < 0.5)" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]}: ${r[1]} ms`, cls: r[0] === "congruent" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Selective Attention — Dichotic Listening
// ═══════════════════════════════════════════════════════
const selectiveAttention: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a dichotic listening trial: <code>ear</code> (left or right) and <code>correct</code> (yes or no). The calculator computes accuracy per ear and the laterality index, where positive values indicate right-ear advantage (typical for language).`,
  defaultData: `ear,correct
right,yes
right,yes
right,yes
right,no
right,yes
right,yes
right,yes
right,yes
right,no
right,yes
right,yes
right,yes
right,yes
right,yes
right,no
left,yes
left,no
left,yes
left,no
left,yes
left,yes
left,no
left,yes
left,no
left,yes
left,no
left,yes
left,yes
left,no
left,yes`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^ear/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["left","right"].includes(r[i][0])) return `Row ${i+1}: ear must be left or right.`;
      if (!["yes","no"].includes(r[i][1])) return `Row ${i+1}: correct must be yes or no.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const left = R.filter(r => r[0] === "left");
    const right = R.filter(r => r[0] === "right");
    if (left.length === 0 || right.length === 0)
      return "Need trials for both left and right ears.";

    const leftCorrect = left.filter(r => r[1] === "yes").length;
    const rightCorrect = right.filter(r => r[1] === "yes").length;
    const leftAcc = leftCorrect / left.length;
    const rightAcc = rightCorrect / right.length;
    const overallAcc = (leftCorrect + rightCorrect) / n;

    // Laterality Index: (R - L) / (R + L) based on correct counts
    const li = (rightCorrect + leftCorrect) > 0
      ? (rightCorrect - leftCorrect) / (rightCorrect + leftCorrect)
      : 0;

    // Right-ear advantage
    const rea = rightAcc - leftAcc;

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "Overall Accuracy", value: pct(overallAcc) },
        { label: "Laterality Index", value: f4(li) },
        { label: "Right-Ear Advantage", value: `${f2(rea * 100)} pp` },
      ],
      sections: [
        { title: "Right Ear", rows: [
          { label: "Trials", value: `${right.length}` },
          { label: "Correct", value: `${rightCorrect}` },
          { label: "Accuracy", value: pct(rightAcc) },
        ]},
        { title: "Left Ear", rows: [
          { label: "Trials", value: `${left.length}` },
          { label: "Correct", value: `${leftCorrect}` },
          { label: "Accuracy", value: pct(leftAcc) },
        ]},
        { title: "Laterality Analysis", highlight: true, rows: [
          { label: "Laterality Index (R\u2212L)/(R+L)", value: f4(li), accent: true },
          { label: "Right-Ear Advantage (accuracy difference)", value: `${f2(rea * 100)} percentage points` },
          { label: "Dominant ear", value: li > 0.05 ? "Right ear (typical for language)" : li < -0.05 ? "Left ear" : "No clear dominance", accent: true },
          { label: "Interpretation", value: Math.abs(li) > 0.2 ? "Strong lateralization" : Math.abs(li) > 0.1 ? "Moderate lateralization" : "Weak or no lateralization" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]} ear: ${r[1] === "yes" ? "correct" : "incorrect"}`, cls: r[1] === "yes" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const attentionCalcs: Record<string, CalcConfig> = {
  Stroop_Effect: stroopEffect,
  Selective_Attention: selectiveAttention,
};
