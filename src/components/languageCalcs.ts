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
// 1. Word Recognition — Lexical Decision Task
// ═══════════════════════════════════════════════════════
const wordRecognition: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a lexical decision trial: <code>word_type</code> (word or nonword) and <code>reaction_time</code> (in ms). The calculator computes the lexicality effect (RT difference between words and nonwords) and analyzes response patterns.`,
  defaultData: `word_type,reaction_time
word,520
word,540
word,510
word,530
word,560
word,515
word,545
word,525
word,535
word,505
word,550
word,520
word,540
word,530
word,510
nonword,640
nonword,680
nonword,620
nonword,660
nonword,700
nonword,650
nonword,670
nonword,630
nonword,690
nonword,645
nonword,675
nonword,655
nonword,685
nonword,635
nonword,665`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^word/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["word","nonword"].includes(r[i][0])) return `Row ${i+1}: word_type must be word or nonword.`;
      const rt = parseFloat(r[i][1]);
      if (isNaN(rt) || rt <= 0) return `Row ${i+1}: reaction_time must be a positive number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const words = R.filter(r => r[0] === "word").map(r => parseFloat(r[1]));
    const nonwords = R.filter(r => r[0] === "nonword").map(r => parseFloat(r[1]));
    if (words.length === 0 || nonwords.length === 0)
      return "Need both word and nonword trials.";

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

    const mWord = mean(words);
    const mNonword = mean(nonwords);
    const sdWord = sd(words);
    const sdNonword = sd(nonwords);
    const medWord = median(words);
    const medNonword = median(nonwords);

    const lexicalityEffect = mNonword - mWord;
    const pooledSD = Math.sqrt(((words.length - 1) * sdWord ** 2 + (nonwords.length - 1) * sdNonword ** 2) / (words.length + nonwords.length - 2));
    const cohensD = pooledSD > 0 ? lexicalityEffect / pooledSD : 0;
    const pctSlowing = mWord > 0 ? (lexicalityEffect / mWord) * 100 : 0;

    // Coefficient of variation
    const cvWord = mWord > 0 ? (sdWord / mWord) * 100 : 0;
    const cvNonword = mNonword > 0 ? (sdNonword / mNonword) * 100 : 0;

    // Identify possible outliers (beyond 2.5 SD)
    const wordOutliers = words.filter(t => Math.abs(t - mWord) > 2.5 * sdWord).length;
    const nonwordOutliers = nonwords.filter(t => Math.abs(t - mNonword) > 2.5 * sdNonword).length;

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "Lexicality Effect", value: `${f2(lexicalityEffect)} ms` },
        { label: "Cohen's d", value: f2(cohensD) },
        { label: "% Slowing", value: `${f2(pctSlowing)}%` },
      ],
      sections: [
        { title: "Word Trials", rows: [
          { label: "N", value: `${words.length}` },
          { label: "Mean RT", value: `${f2(mWord)} ms` },
          { label: "Median RT", value: `${f2(medWord)} ms` },
          { label: "SD", value: `${f2(sdWord)} ms` },
          { label: "CV", value: `${f2(cvWord)}%` },
          { label: "Range", value: `${f2(Math.min(...words))} \u2013 ${f2(Math.max(...words))} ms` },
          { label: "Potential outliers (\u00B12.5 SD)", value: `${wordOutliers}` },
        ]},
        { title: "Nonword Trials", rows: [
          { label: "N", value: `${nonwords.length}` },
          { label: "Mean RT", value: `${f2(mNonword)} ms` },
          { label: "Median RT", value: `${f2(medNonword)} ms` },
          { label: "SD", value: `${f2(sdNonword)} ms` },
          { label: "CV", value: `${f2(cvNonword)}%` },
          { label: "Range", value: `${f2(Math.min(...nonwords))} \u2013 ${f2(Math.max(...nonwords))} ms` },
          { label: "Potential outliers (\u00B12.5 SD)", value: `${nonwordOutliers}` },
        ]},
        { title: "Lexicality Effect", highlight: true, rows: [
          { label: "Effect = Mean(nonword) \u2212 Mean(word)", value: `${f2(lexicalityEffect)} ms`, accent: true },
          { label: "Percentage slowing for nonwords", value: `${f2(pctSlowing)}%` },
          { label: "Pooled SD", value: `${f2(pooledSD)} ms` },
          { label: "Cohen's d", value: f2(cohensD), accent: true },
          { label: "Effect size", value: Math.abs(cohensD) >= 0.8 ? "Large (|d| \u2265 0.8)" : Math.abs(cohensD) >= 0.5 ? "Medium (0.5 \u2264 |d| < 0.8)" : "Small (|d| < 0.5)" },
        ]},
        { title: "Interpretation", rows: [
          { label: "Word advantage", value: lexicalityEffect > 0 ? "Words recognized faster than nonwords (expected)" : "Nonwords recognized faster (atypical)" },
          { label: "Variability comparison", value: cvNonword > cvWord ? "Nonwords show more variability (typical)" : "Words show more variability (atypical)" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `${r[0]}: ${r[1]} ms`, cls: r[0] === "word" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const languageCalcs: Record<string, CalcConfig> = {
  Word_Recognition: wordRecognition,
};
