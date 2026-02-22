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
// 1. Anchoring Bias — Anchoring Effect Calculator
// ═══════════════════════════════════════════════════════
const anchoringBias: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a participant's estimate after receiving an anchor: <code>anchor</code> (high or low) and <code>estimate</code> (numeric value). The calculator computes the anchoring index (AI), which measures how much estimates are pulled toward the anchor. AI = (mean_high \u2212 mean_low) / (high_anchor \u2212 low_anchor).`,
  defaultData: `anchor,estimate
high,85
high,80
high,90
high,75
high,88
high,82
high,78
high,92
high,84
high,86
high,79
high,87
high,83
high,81
high,77
low,35
low,40
low,30
low,45
low,32
low,38
low,42
low,28
low,36
low,34
low,41
low,33
low,37
low,39
low,31`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^anchor/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["high","low"].includes(r[i][0])) return `Row ${i+1}: anchor must be high or low.`;
      const est = parseFloat(r[i][1]);
      if (isNaN(est)) return `Row ${i+1}: estimate must be a number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const high = R.filter(r => r[0] === "high").map(r => parseFloat(r[1]));
    const low = R.filter(r => r[0] === "low").map(r => parseFloat(r[1]));
    if (high.length === 0 || low.length === 0)
      return "Need both high-anchor and low-anchor estimates.";

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = (arr: number[]) => {
      const m = mean(arr);
      return Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1));
    };

    const mHigh = mean(high);
    const mLow = mean(low);
    const sdHigh = sd(high);
    const sdLow = sd(low);
    const anchorDiff = mHigh - mLow;
    const pooledSD = Math.sqrt(((high.length - 1) * sdHigh ** 2 + (low.length - 1) * sdLow ** 2) / (high.length + low.length - 2));
    const cohensD = pooledSD > 0 ? anchorDiff / pooledSD : 0;

    // Anchoring Index: typically computed relative to the anchor values
    // Using the range of estimates as the scale
    const allEst = [...high, ...low];
    const overallMean = mean(allEst);
    const overallSD = sd(allEst);
    const range = Math.max(...allEst) - Math.min(...allEst);
    const anchoringIndex = range > 0 ? anchorDiff / range : 0;

    return {
      cards: [
        { label: "Total Participants", value: n },
        { label: "Anchor Effect", value: `${f2(anchorDiff)} pts` },
        { label: "Anchoring Index", value: f4(anchoringIndex) },
        { label: "Cohen's d", value: f2(cohensD) },
      ],
      sections: [
        { title: "High-Anchor Group", rows: [
          { label: "N", value: `${high.length}` },
          { label: "Mean estimate", value: f2(mHigh) },
          { label: "SD", value: f2(sdHigh) },
          { label: "Range", value: `${f2(Math.min(...high))} \u2013 ${f2(Math.max(...high))}` },
        ]},
        { title: "Low-Anchor Group", rows: [
          { label: "N", value: `${low.length}` },
          { label: "Mean estimate", value: f2(mLow) },
          { label: "SD", value: f2(sdLow) },
          { label: "Range", value: `${f2(Math.min(...low))} \u2013 ${f2(Math.max(...low))}` },
        ]},
        { title: "Anchoring Effect", highlight: true, rows: [
          { label: "Mean difference (high \u2212 low)", value: f2(anchorDiff), accent: true },
          { label: "Anchoring Index (diff / range)", value: f4(anchoringIndex), accent: true },
          { label: "Pooled SD", value: f2(pooledSD) },
          { label: "Cohen's d", value: f2(cohensD) },
          { label: "Effect size", value: Math.abs(cohensD) >= 0.8 ? "Large (|d| \u2265 0.8)" : Math.abs(cohensD) >= 0.5 ? "Medium (0.5 \u2264 |d| < 0.8)" : "Small (|d| < 0.5)" },
        ]},
        { title: "Interpretation", rows: [
          { label: "Anchoring strength", value: anchoringIndex > 0.5 ? "Strong anchoring effect (AI > 0.5)" : anchoringIndex > 0.3 ? "Moderate anchoring effect" : "Weak anchoring effect (AI < 0.3)" },
          { label: "Overall mean (unbiased reference)", value: f2(overallMean) },
          { label: "Overall SD", value: f2(overallSD) },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]} anchor: estimate=${r[1]}`, cls: r[0] === "high" ? "disease" : "healthy" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Decision Making — Expected Value Calculator
// ═══════════════════════════════════════════════════════
const decisionMaking: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents an outcome in a decision scenario: <code>option</code> (label, e.g., A or B), <code>probability</code> (0\u20131), and <code>outcome</code> (monetary or utility value). The calculator computes the expected value (EV) of each option and identifies the rational choice.`,
  defaultData: `option,probability,outcome
a,0.80,100
a,0.20,-50
b,0.50,200
b,0.30,50
b,0.20,-100
a,0.80,120
a,0.20,-40
b,0.50,180
b,0.30,60
b,0.20,-80
a,0.80,110
a,0.20,-45
b,0.50,190
b,0.30,55
b,0.20,-90
a,0.80,105
a,0.20,-55
b,0.50,210
b,0.30,45
b,0.20,-110
a,0.80,115
a,0.20,-35
b,0.50,195
b,0.30,65
b,0.20,-85`,
  minRows: 2,
  parse: (raw) => {
    const r = parseCsv(raw as string, 3, /^option/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (r[i][0].trim().length === 0) return `Row ${i+1}: option cannot be empty.`;
      const prob = parseFloat(r[i][1]);
      if (isNaN(prob) || prob < 0 || prob > 1) return `Row ${i+1}: probability must be between 0 and 1.`;
      const outcome = parseFloat(r[i][2]);
      if (isNaN(outcome)) return `Row ${i+1}: outcome must be a number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;

    // Group by option
    const options = new Map<string, { probs: number[]; outcomes: number[] }>();
    for (const r of R) {
      const opt = r[0];
      if (!options.has(opt)) options.set(opt, { probs: [], outcomes: [] });
      const g = options.get(opt)!;
      g.probs.push(parseFloat(r[1]));
      g.outcomes.push(parseFloat(r[2]));
    }

    if (options.size < 1) return "Need at least one option.";

    const optionNames = [...options.keys()].sort();
    const evMap = new Map<string, number>();
    const optionSections: { title: string; rows: StatRow[] }[] = [];

    for (const name of optionNames) {
      const g = options.get(name)!;
      let ev = 0;
      const detailRows: StatRow[] = [];
      let totalProb = 0;

      for (let i = 0; i < g.probs.length; i++) {
        const contribution = g.probs[i] * g.outcomes[i];
        ev += contribution;
        totalProb += g.probs[i];
        detailRows.push({
          label: `p=${f2(g.probs[i])} \u00D7 ${f2(g.outcomes[i])}`,
          value: `${f2(contribution)}`,
        });
      }

      evMap.set(name, ev);

      // Variance and SD of outcomes
      const meanOutcome = g.outcomes.reduce((a, b) => a + b, 0) / g.outcomes.length;
      const variance = g.outcomes.reduce((s, x) => s + (x - meanOutcome) ** 2, 0) / g.outcomes.length;

      detailRows.push({ label: "Sum of probabilities", value: f4(totalProb) });
      detailRows.push({ label: "Expected Value", value: f2(ev), accent: true });
      detailRows.push({ label: "Outcome variance", value: f2(variance) });
      detailRows.push({ label: "Outcome SD (risk)", value: f2(Math.sqrt(variance)) });

      optionSections.push({ title: `Option "${name.toUpperCase()}"`, rows: detailRows });
    }

    // Find best option
    let bestOption = optionNames[0];
    let bestEV = evMap.get(optionNames[0])!;
    for (const name of optionNames) {
      const ev = evMap.get(name)!;
      if (ev > bestEV) { bestEV = ev; bestOption = name; }
    }

    const comparisonRows: StatRow[] = optionNames.map(name => ({
      label: `EV(${name.toUpperCase()})`,
      value: f2(evMap.get(name)!),
      accent: name === bestOption,
    }));

    if (optionNames.length >= 2) {
      const evDiff = Math.abs(evMap.get(optionNames[0])! - evMap.get(optionNames[1])!);
      comparisonRows.push({ label: "EV difference", value: f2(evDiff) });
    }

    comparisonRows.push({ label: "Rational choice (max EV)", value: bestOption.toUpperCase(), accent: true });

    return {
      cards: [
        { label: "Total Outcomes", value: n },
        { label: "Options", value: options.size },
        { label: "Best Option", value: bestOption.toUpperCase() },
        { label: "Best EV", value: f2(bestEV) },
      ],
      sections: [
        ...optionSections,
        { title: "Comparison", highlight: true, rows: comparisonRows },
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const outcome = parseFloat(r[2]);
    return { text: `${r[0].toUpperCase()}: p=${r[1]}, val=${r[2]}`, cls: outcome >= 0 ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const thinkingCalcs: Record<string, CalcConfig> = {
  Anchoring_Bias: anchoringBias,
  Decision_Making: decisionMaking,
};
