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
// 1. Cognitive Load Theory — Cognitive Load Analyzer
// ═══════════════════════════════════════════════════════
const cognitiveLoadTheory: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row records a task performance measure: <code>task_complexity</code> (low, medium, or high), <code>errors</code> (error count), and <code>time_seconds</code> (completion time). The calculator computes a cognitive load index by combining error rates and time, and compares load across complexity levels.`,
  defaultData: `task_complexity,errors,time_seconds
low,0,25
low,1,30
low,0,22
low,0,28
low,1,32
low,0,26
low,0,24
low,1,29
low,0,27
low,0,23
medium,2,55
medium,3,62
medium,1,48
medium,2,58
medium,4,65
medium,2,52
medium,3,60
medium,1,50
medium,2,56
medium,3,63
high,5,95
high,6,110
high,4,88
high,7,105
high,5,98
high,8,115
high,6,102
high,4,92
high,7,108
high,5,100`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 3, /^task/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["low","medium","high"].includes(r[i][0])) return `Row ${i+1}: task_complexity must be low, medium, or high.`;
      const errors = parseInt(r[i][1], 10);
      if (isNaN(errors) || errors < 0) return `Row ${i+1}: errors must be a non-negative integer.`;
      const time = parseFloat(r[i][2]);
      if (isNaN(time) || time <= 0) return `Row ${i+1}: time_seconds must be a positive number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = (arr: number[]) => {
      const m = mean(arr);
      return arr.length > 1 ? Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1)) : 0;
    };

    // Group by complexity
    const levels = ["low", "medium", "high"] as const;
    const groups = new Map<string, { errors: number[]; times: number[] }>();
    for (const level of levels) groups.set(level, { errors: [], times: [] });
    for (const r of R) {
      const g = groups.get(r[0])!;
      g.errors.push(parseInt(r[1], 10));
      g.times.push(parseFloat(r[2]));
    }

    // Global stats for normalization
    const allErrors = R.map(r => parseInt(r[1], 10));
    const allTimes = R.map(r => parseFloat(r[2]));
    const globalMeanErr = mean(allErrors);
    const globalSDErr = sd(allErrors);
    const globalMeanTime = mean(allTimes);
    const globalSDTime = sd(allTimes);

    const levelSections: { title: string; rows: StatRow[] }[] = [];
    const loadIndices: { level: string; cli: number }[] = [];
    const summaryRows: StatRow[] = [];

    for (const level of levels) {
      const g = groups.get(level)!;
      if (g.errors.length === 0) continue;

      const mErr = mean(g.errors);
      const mTime = mean(g.times);
      const sdErr = sd(g.errors);
      const sdTime = sd(g.times);

      // Cognitive Load Index: z-score of errors + z-score of time (higher = more load)
      const zErr = globalSDErr > 0 ? (mErr - globalMeanErr) / globalSDErr : 0;
      const zTime = globalSDTime > 0 ? (mTime - globalMeanTime) / globalSDTime : 0;
      const cli = (zErr + zTime) / 2;
      loadIndices.push({ level, cli });

      // Efficiency: accuracy / time (lower errors and lower time = higher efficiency)
      const efficiency = mTime > 0 ? (1 - mErr / Math.max(...allErrors)) / (mTime / Math.max(...allTimes)) : 0;

      summaryRows.push({
        label: `${level.charAt(0).toUpperCase() + level.slice(1)} complexity`,
        value: `CLI = ${f2(cli)} (errors: ${f2(mErr)}, time: ${f2(mTime)}s)`,
        accent: level === "high",
      });

      levelSections.push({
        title: `${level.charAt(0).toUpperCase() + level.slice(1)} Complexity (n=${g.errors.length})`,
        rows: [
          { label: "Mean errors", value: `${f2(mErr)} (SD=${f2(sdErr)})` },
          { label: "Mean time", value: `${f2(mTime)}s (SD=${f2(sdTime)}s)` },
          { label: "z(errors)", value: f4(zErr) },
          { label: "z(time)", value: f4(zTime) },
          { label: "Cognitive Load Index", value: f2(cli), accent: true },
          { label: "Efficiency score", value: f2(efficiency) },
        ],
      });
    }

    // Load increase from low to high
    const lowCLI = loadIndices.find(l => l.level === "low")?.cli ?? 0;
    const highCLI = loadIndices.find(l => l.level === "high")?.cli ?? 0;
    const loadIncrease = highCLI - lowCLI;

    return {
      cards: [
        { label: "Total Observations", value: n },
        { label: "Low CLI", value: f2(lowCLI) },
        { label: "High CLI", value: f2(highCLI) },
        { label: "Load Increase", value: f2(loadIncrease) },
      ],
      sections: [
        { title: "Cognitive Load by Complexity", highlight: true, rows: summaryRows },
        ...levelSections,
        { title: "Cognitive Load Progression", highlight: true, rows: [
          { label: "Load increase (high \u2212 low)", value: f2(loadIncrease), accent: true },
          { label: "Pattern", value: loadIncrease > 1.5 ? "Steep increase in cognitive load" : loadIncrease > 0.5 ? "Moderate load increase" : "Gradual load increase" },
          { label: "Overall mean errors", value: f2(globalMeanErr) },
          { label: "Overall mean time", value: `${f2(globalMeanTime)}s` },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const errors = parseInt(r[1], 10);
    return { text: `${r[0]}: ${r[1]} errors, ${r[2]}s`, cls: errors <= 1 ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Testing Effect — Testing vs. Restudying
// ═══════════════════════════════════════════════════════
const testingEffect: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a participant's final test score: <code>condition</code> (test or restudy) and <code>final_score</code> (0\u2013100). The calculator computes the testing advantage comparing retrieval practice to passive restudying.`,
  defaultData: `condition,final_score
test,82
test,78
test,85
test,80
test,88
test,76
test,84
test,81
test,86
test,79
test,83
test,87
test,77
test,82
test,85
restudy,68
restudy,65
restudy,72
restudy,66
restudy,70
restudy,63
restudy,69
restudy,67
restudy,74
restudy,64
restudy,71
restudy,68
restudy,62
restudy,66
restudy,73`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^cond/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["test","restudy"].includes(r[i][0])) return `Row ${i+1}: condition must be test or restudy.`;
      const score = parseFloat(r[i][1]);
      if (isNaN(score) || score < 0 || score > 100) return `Row ${i+1}: final_score must be between 0 and 100.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const testScores = R.filter(r => r[0] === "test").map(r => parseFloat(r[1]));
    const restudyScores = R.filter(r => r[0] === "restudy").map(r => parseFloat(r[1]));
    if (testScores.length === 0 || restudyScores.length === 0)
      return "Need both test and restudy conditions.";

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = (arr: number[]) => {
      const m = mean(arr);
      return Math.sqrt(arr.reduce((s, x) => s + (x - m) ** 2, 0) / (arr.length - 1));
    };
    const median = (arr: number[]) => {
      const sorted = [...arr].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    };

    const mTest = mean(testScores);
    const mRestudy = mean(restudyScores);
    const sdTest = sd(testScores);
    const sdRestudy = sd(restudyScores);
    const medTest = median(testScores);
    const medRestudy = median(restudyScores);

    const testingAdvantage = mTest - mRestudy;
    const pooledSD = Math.sqrt(((testScores.length - 1) * sdTest ** 2 + (restudyScores.length - 1) * sdRestudy ** 2) / (testScores.length + restudyScores.length - 2));
    const cohensD = pooledSD > 0 ? testingAdvantage / pooledSD : 0;
    const pctImprovement = mRestudy > 0 ? (testingAdvantage / mRestudy) * 100 : 0;

    // Overlap: how many restudy scores exceed the test mean
    const restudyAboveTestMean = restudyScores.filter(s => s >= mTest).length;
    const overlapPct = restudyAboveTestMean / restudyScores.length;

    return {
      cards: [
        { label: "Total Participants", value: n },
        { label: "Testing Advantage", value: `${f2(testingAdvantage)} pts` },
        { label: "Cohen's d", value: f2(cohensD) },
        { label: "% Improvement", value: `${f2(pctImprovement)}%` },
      ],
      sections: [
        { title: "Retrieval Practice (Test) Group", rows: [
          { label: "N", value: `${testScores.length}` },
          { label: "Mean score", value: f2(mTest) },
          { label: "Median score", value: f2(medTest) },
          { label: "SD", value: f2(sdTest) },
          { label: "Range", value: `${f2(Math.min(...testScores))} \u2013 ${f2(Math.max(...testScores))}` },
        ]},
        { title: "Restudy Group", rows: [
          { label: "N", value: `${restudyScores.length}` },
          { label: "Mean score", value: f2(mRestudy) },
          { label: "Median score", value: f2(medRestudy) },
          { label: "SD", value: f2(sdRestudy) },
          { label: "Range", value: `${f2(Math.min(...restudyScores))} \u2013 ${f2(Math.max(...restudyScores))}` },
        ]},
        { title: "Testing Effect", highlight: true, rows: [
          { label: "Testing advantage (test \u2212 restudy)", value: `${f2(testingAdvantage)} points`, accent: true },
          { label: "Relative improvement", value: `${f2(pctImprovement)}%` },
          { label: "Pooled SD", value: f2(pooledSD) },
          { label: "Cohen's d", value: f2(cohensD), accent: true },
          { label: "Effect size", value: Math.abs(cohensD) >= 0.8 ? "Large (|d| \u2265 0.8)" : Math.abs(cohensD) >= 0.5 ? "Medium (0.5 \u2264 |d| < 0.8)" : "Small (|d| < 0.5)" },
          { label: "Restudy scores \u2265 test mean", value: `${restudyAboveTestMean}/${restudyScores.length} (${pct(overlapPct)})` },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]}: ${r[1]} pts`, cls: r[0] === "test" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const applicationsCalcs: Record<string, CalcConfig> = {
  Cognitive_Load_Theory: cognitiveLoadTheory,
  Testing_Effect: testingEffect,
};
