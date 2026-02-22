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
// 1. Theory of Mind — False Belief Task Analyzer
// ═══════════════════════════════════════════════════════
const theoryOfMind: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row records a child's false-belief task result: <code>age_years</code> (age in years, can be decimal) and <code>pass</code> (yes or no). The calculator computes pass rates by age group and estimates the developmental transition point where &ge;50% of children pass.`,
  defaultData: `age_years,pass
2.5,no
2.5,no
2.8,no
3.0,no
3.0,no
3.0,yes
3.2,no
3.2,no
3.5,no
3.5,yes
3.5,no
3.8,yes
3.8,no
4.0,yes
4.0,yes
4.0,no
4.0,yes
4.2,yes
4.2,yes
4.2,no
4.5,yes
4.5,yes
4.5,yes
4.5,no
5.0,yes
5.0,yes
5.0,yes
5.5,yes
5.5,yes
6.0,yes
6.0,yes
6.0,yes
6.5,yes
7.0,yes
7.0,yes`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^age/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const age = parseFloat(r[i][0]);
      if (isNaN(age) || age < 0 || age > 20) return `Row ${i+1}: age_years must be between 0 and 20.`;
      if (!["yes","no"].includes(r[i][1])) return `Row ${i+1}: pass must be yes or no.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const totalPass = R.filter(r => r[1] === "yes").length;
    const overallRate = totalPass / n;

    // Create age groups (half-year bins)
    const data = R.map(r => ({ age: parseFloat(r[0]), pass: r[1] === "yes" }));
    const groups = new Map<string, { total: number; pass: number; minAge: number; maxAge: number }>();

    for (const d of data) {
      // Bin into integer year groups
      const bin = Math.floor(d.age);
      const label = `${bin}\u2013${bin + 1}`;
      if (!groups.has(label)) groups.set(label, { total: 0, pass: 0, minAge: bin, maxAge: bin + 1 });
      const g = groups.get(label)!;
      g.total++;
      if (d.pass) g.pass++;
    }

    const sortedGroups = [...groups.entries()].sort((a, b) => a[1].minAge - b[1].minAge);
    const groupRows: StatRow[] = sortedGroups.map(([label, g]) => {
      const rate = g.pass / g.total;
      return {
        label: `Age ${label} (n=${g.total})`,
        value: `${g.pass}/${g.total} pass (${pct(rate)})`,
        accent: rate >= 0.5,
      };
    });

    // Estimate transition point: find where pass rate crosses 50%
    let transitionAge = NaN;
    for (let i = 0; i < sortedGroups.length - 1; i++) {
      const rate1 = sortedGroups[i][1].pass / sortedGroups[i][1].total;
      const rate2 = sortedGroups[i + 1][1].pass / sortedGroups[i + 1][1].total;
      if (rate1 < 0.5 && rate2 >= 0.5) {
        // Linear interpolation
        const age1 = (sortedGroups[i][1].minAge + sortedGroups[i][1].maxAge) / 2;
        const age2 = (sortedGroups[i + 1][1].minAge + sortedGroups[i + 1][1].maxAge) / 2;
        transitionAge = age1 + (0.5 - rate1) / (rate2 - rate1) * (age2 - age1);
        break;
      }
    }
    // If first group already passes, set transition to its midpoint
    if (isNaN(transitionAge) && sortedGroups.length > 0) {
      const firstRate = sortedGroups[0][1].pass / sortedGroups[0][1].total;
      if (firstRate >= 0.5) {
        transitionAge = (sortedGroups[0][1].minAge + sortedGroups[0][1].maxAge) / 2;
      }
    }

    // Youngest passer and oldest failer
    const passers = data.filter(d => d.pass);
    const failers = data.filter(d => !d.pass);
    const youngestPasser = passers.length > 0 ? Math.min(...passers.map(d => d.age)) : NaN;
    const oldestFailer = failers.length > 0 ? Math.max(...failers.map(d => d.age)) : NaN;

    // Mean age of passers vs failers
    const meanPassAge = passers.length > 0 ? passers.reduce((s, d) => s + d.age, 0) / passers.length : NaN;
    const meanFailAge = failers.length > 0 ? failers.reduce((s, d) => s + d.age, 0) / failers.length : NaN;

    return {
      cards: [
        { label: "Total Children", value: n },
        { label: "Overall Pass Rate", value: pct(overallRate) },
        { label: "Transition Age", value: !isNaN(transitionAge) ? `${f2(transitionAge)} yrs` : "N/A" },
        { label: "Passers", value: totalPass },
      ],
      sections: [
        { title: "Pass Rate by Age Group", rows: groupRows },
        { title: "Developmental Transition", highlight: true, rows: [
          { label: "Estimated transition age (50% pass rate)", value: !isNaN(transitionAge) ? `${f2(transitionAge)} years` : "Cannot estimate", accent: true },
          { label: "Youngest child to pass", value: !isNaN(youngestPasser) ? `${f2(youngestPasser)} years` : "None" },
          { label: "Oldest child to fail", value: !isNaN(oldestFailer) ? `${f2(oldestFailer)} years` : "None" },
          { label: "Mean age of passers", value: !isNaN(meanPassAge) ? `${f2(meanPassAge)} years` : "N/A" },
          { label: "Mean age of failers", value: !isNaN(meanFailAge) ? `${f2(meanFailAge)} years` : "N/A" },
        ]},
        { title: "Interpretation", rows: [
          { label: "Typical finding", value: "Most children develop false-belief understanding between ages 4\u20135" },
          { label: "Sample consistency", value: !isNaN(transitionAge) && transitionAge >= 3.5 && transitionAge <= 5.5 ? "Consistent with developmental norms" : "Deviates from typical findings", accent: true },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    return { text: `Age ${r[0]}: ${r[1] === "yes" ? "pass" : "fail"}`, cls: r[1] === "yes" ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const developmentCalcs: Record<string, CalcConfig> = {
  Theory_of_Mind: theoryOfMind,
};
