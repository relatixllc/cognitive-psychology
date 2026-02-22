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
// 1. Lateralization — Laterality Index Calculator
// ═══════════════════════════════════════════════════════
const lateralization: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row records performance on a cognitive task: <code>task</code> (task name/label), <code>left_score</code> (left-hemisphere performance), and <code>right_score</code> (right-hemisphere performance). The calculator computes the Laterality Index LI = (R \u2212 L) / (R + L), where +1 indicates full right lateralization and \u22121 indicates full left lateralization.`,
  defaultData: `task,left_score,right_score
language,85,45
language,90,50
language,88,42
language,82,48
language,87,44
spatial,40,82
spatial,45,88
spatial,38,85
spatial,42,90
spatial,44,86
language,80,46
language,86,43
language,92,51
language,84,47
language,89,41
spatial,41,84
spatial,43,87
spatial,39,89
spatial,46,83
spatial,37,91
motor,70,72
motor,68,74
motor,71,73
motor,69,75
motor,72,71
face,50,80
face,48,82
face,52,78
face,46,84
face,54,76`,
  minRows: 2,
  parse: (raw) => {
    const r = parseCsv(raw as string, 3, /^task/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (r[i][0].trim().length === 0) return `Row ${i+1}: task cannot be empty.`;
      const left = parseFloat(r[i][1]);
      const right = parseFloat(r[i][2]);
      if (isNaN(left) || left < 0) return `Row ${i+1}: left_score must be a non-negative number.`;
      if (isNaN(right) || right < 0) return `Row ${i+1}: right_score must be a non-negative number.`;
      if (left + right === 0) return `Row ${i+1}: left_score and right_score cannot both be zero.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;

    // Overall LI
    let totalLeft = 0, totalRight = 0;
    for (const r of R) {
      totalLeft += parseFloat(r[1]);
      totalRight += parseFloat(r[2]);
    }
    const overallLI = (totalRight - totalLeft) / (totalRight + totalLeft);

    // Group by task
    const tasks = new Map<string, { lefts: number[]; rights: number[] }>();
    for (const r of R) {
      const task = r[0];
      if (!tasks.has(task)) tasks.set(task, { lefts: [], rights: [] });
      const g = tasks.get(task)!;
      g.lefts.push(parseFloat(r[1]));
      g.rights.push(parseFloat(r[2]));
    }

    const taskNames = [...tasks.keys()].sort();
    const taskSections: { title: string; highlight?: boolean; rows: StatRow[] }[] = [];
    const summaryRows: StatRow[] = [];

    for (const name of taskNames) {
      const g = tasks.get(name)!;
      const meanL = g.lefts.reduce((a, b) => a + b, 0) / g.lefts.length;
      const meanR = g.rights.reduce((a, b) => a + b, 0) / g.rights.length;
      const taskLI = (meanR - meanL) / (meanR + meanL);
      const dominance = taskLI > 0.1 ? "Right-lateralized" : taskLI < -0.1 ? "Left-lateralized" : "Bilateral";

      const sdL = g.lefts.length > 1 ? Math.sqrt(g.lefts.reduce((s, x) => s + (x - meanL) ** 2, 0) / (g.lefts.length - 1)) : 0;
      const sdR = g.rights.length > 1 ? Math.sqrt(g.rights.reduce((s, x) => s + (x - meanR) ** 2, 0) / (g.rights.length - 1)) : 0;

      summaryRows.push({
        label: `${name} (n=${g.lefts.length})`,
        value: `LI = ${f4(taskLI)} (${dominance})`,
        accent: Math.abs(taskLI) > 0.3,
      });

      taskSections.push({
        title: `Task: ${name}`,
        rows: [
          { label: "Trials", value: `${g.lefts.length}` },
          { label: "Mean left score", value: `${f2(meanL)} (SD=${f2(sdL)})` },
          { label: "Mean right score", value: `${f2(meanR)} (SD=${f2(sdR)})` },
          { label: "Laterality Index", value: f4(taskLI), accent: true },
          { label: "Dominance", value: dominance },
        ],
      });
    }

    // Count lateralization patterns
    let leftLat = 0, rightLat = 0, bilateral = 0;
    for (const name of taskNames) {
      const g = tasks.get(name)!;
      const meanL = g.lefts.reduce((a, b) => a + b, 0) / g.lefts.length;
      const meanR = g.rights.reduce((a, b) => a + b, 0) / g.rights.length;
      const li = (meanR - meanL) / (meanR + meanL);
      if (li > 0.1) rightLat++;
      else if (li < -0.1) leftLat++;
      else bilateral++;
    }

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "Tasks", value: tasks.size },
        { label: "Overall LI", value: f4(overallLI) },
        { label: "Dominant Side", value: overallLI > 0.1 ? "Right" : overallLI < -0.1 ? "Left" : "Bilateral" },
      ],
      sections: [
        { title: "Laterality Summary by Task", highlight: true, rows: summaryRows },
        ...taskSections,
        { title: "Overall Lateralization Pattern", rows: [
          { label: "Left-lateralized tasks", value: `${leftLat}` },
          { label: "Right-lateralized tasks", value: `${rightLat}` },
          { label: "Bilateral tasks", value: `${bilateral}` },
          { label: "Overall LI (all data)", value: f4(overallLI), accent: true },
          { label: "Interpretation", value: Math.abs(overallLI) > 0.3 ? "Strong lateralization" : Math.abs(overallLI) > 0.1 ? "Moderate lateralization" : "Weak or no overall lateralization" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const left = parseFloat(r[1]);
    const right = parseFloat(r[2]);
    const li = (right - left) / (right + left);
    return { text: `${r[0]}: L=${r[1]} R=${r[2]} (LI=${f4(li)})`, cls: li > 0 ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const neuroscienceCalcs: Record<string, CalcConfig> = {
  Lateralization: lateralization,
};
