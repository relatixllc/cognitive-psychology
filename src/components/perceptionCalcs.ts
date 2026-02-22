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

/* ── z-score inverse approximation (Rational approximation of probit) ── */
function zInv(p: number): number {
  if (p <= 0) return -3.5;
  if (p >= 1) return 3.5;
  // Beasley-Springer-Moro approximation
  const a = [0, -3.969683028665376e+01, 2.209460984245205e+02,
    -2.759285104469687e+02, 1.383577518672690e+02,
    -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [0, -5.447609879822406e+01, 1.615858368580409e+02,
    -1.556989798598866e+02, 6.680131188771972e+01,
    -1.328068155288572e+01];
  const c = [0, -7.784894002430293e-03, -3.223964580411365e-01,
    -2.400758277161838e+00, -2.549732539343734e+00,
    4.374664141464968e+00, 2.938163982698783e+00];
  const d = [0, 7.784695709041462e-03, 3.224671290700398e-01,
    2.445134137142996e+00, 3.754408661907416e+00];
  const pLow = 0.02425;
  const pHigh = 1 - pLow;
  let q: number, r: number;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) /
           ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
  } else if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    return (((((a[1]*r+a[2])*r+a[3])*r+a[4])*r+a[5])*r+a[6])*q /
           (((((b[1]*r+b[2])*r+b[3])*r+b[4])*r+b[5])*r+1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) /
            ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
  }
}

// ═══════════════════════════════════════════════════════
// 1. Signal Detection Theory — d' and criterion
// ═══════════════════════════════════════════════════════
const signalDetection: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row represents a trial in a signal-detection experiment: <code>trial_type</code> (signal or noise) and <code>response</code> (yes or no). The calculator computes hit rate, false-alarm rate, sensitivity d&prime;, and response criterion &beta;.`,
  defaultData: `trial_type,response
signal,yes
signal,yes
signal,yes
signal,no
signal,yes
signal,yes
signal,no
signal,yes
signal,yes
signal,yes
signal,no
signal,yes
signal,yes
signal,yes
signal,no
noise,no
noise,no
noise,yes
noise,no
noise,no
noise,no
noise,yes
noise,no
noise,no
noise,no
noise,no
noise,yes
noise,no
noise,no
noise,no`,
  minRows: 4,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^trial/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      if (!["signal","noise"].includes(r[i][0])) return `Row ${i+1}: trial_type must be signal or noise.`;
      if (!["yes","no"].includes(r[i][1])) return `Row ${i+1}: response must be yes or no.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const signalTrials = R.filter(r => r[0] === "signal");
    const noiseTrials = R.filter(r => r[0] === "noise");
    if (signalTrials.length === 0 || noiseTrials.length === 0)
      return "Need both signal and noise trials.";

    const hits = signalTrials.filter(r => r[1] === "yes").length;
    const misses = signalTrials.length - hits;
    const falseAlarms = noiseTrials.filter(r => r[1] === "yes").length;
    const correctRejections = noiseTrials.length - falseAlarms;

    // Apply log-linear correction to avoid 0 and 1 rates
    let hitRate = (hits + 0.5) / (signalTrials.length + 1);
    let faRate = (falseAlarms + 0.5) / (noiseTrials.length + 1);

    const zHit = zInv(hitRate);
    const zFa = zInv(faRate);
    const dPrime = zHit - zFa;
    const criterion = -0.5 * (zHit + zFa);

    // Likelihood ratio beta
    const beta = Math.exp(-0.5 * (zHit * zHit - zFa * zFa));

    const rawHitRate = hits / signalTrials.length;
    const rawFaRate = falseAlarms / noiseTrials.length;

    return {
      cards: [
        { label: "Total Trials", value: n },
        { label: "d\u2032 (Sensitivity)", value: f2(dPrime) },
        { label: "Criterion c", value: f2(criterion) },
        { label: "\u03B2 (Likelihood Ratio)", value: f4(beta) },
      ],
      sections: [
        { title: "Response Counts", rows: [
          { label: "Hits (signal + yes)", value: `${hits}` },
          { label: "Misses (signal + no)", value: `${misses}` },
          { label: "False Alarms (noise + yes)", value: `${falseAlarms}` },
          { label: "Correct Rejections (noise + no)", value: `${correctRejections}` },
        ]},
        { title: "Rates", rows: [
          { label: "Hit Rate (raw)", value: pct(rawHitRate) },
          { label: "False Alarm Rate (raw)", value: pct(rawFaRate) },
          { label: "Hit Rate (log-linear corrected)", value: f4(hitRate) },
          { label: "False Alarm Rate (log-linear corrected)", value: f4(faRate) },
        ]},
        { title: "Signal Detection Parameters", highlight: true, rows: [
          { label: "z(Hit Rate)", value: f4(zHit) },
          { label: "z(False Alarm Rate)", value: f4(zFa) },
          { label: "d\u2032 = z(HR) \u2212 z(FAR)", value: f2(dPrime), accent: true },
          { label: "c = \u22120.5 \u00D7 [z(HR) + z(FAR)]", value: f2(criterion), accent: true },
          { label: "\u03B2 = exp(\u22120.5(z(HR)\u00B2 \u2212 z(FAR)\u00B2))", value: f4(beta) },
        ]},
        { title: "Interpretation", rows: [
          { label: "Sensitivity", value: dPrime > 2 ? "High (d\u2032 > 2)" : dPrime > 1 ? "Moderate (1 < d\u2032 \u2264 2)" : "Low (d\u2032 \u2264 1)" },
          { label: "Bias", value: criterion > 0.5 ? "Conservative (tendency to say 'no')" : criterion < -0.5 ? "Liberal (tendency to say 'yes')" : "Approximately neutral" },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const isHit = r[0] === "signal" && r[1] === "yes";
    const isCR = r[0] === "noise" && r[1] === "no";
    const correct = isHit || isCR;
    return { text: `${r[0]}:${r[1]} (${isHit ? "Hit" : r[0]==="signal" ? "Miss" : r[1]==="yes" ? "FA" : "CR"})`, cls: correct ? "healthy" : "disease" };
  },
};

// ═══════════════════════════════════════════════════════
// 2. Visual Illusions — Muller-Lyer
// ═══════════════════════════════════════════════════════
const visualIllusions: CalcConfig = {
  title: "Interactive Calculator",
  description: `Each row records a M&uuml;ller-Lyer illusion trial: <code>line_length</code> (actual length in mm) and <code>perceived_length</code> (participant's estimate in mm). The calculator computes illusion magnitude and percentage error across trials.`,
  defaultData: `line_length,perceived_length
30,34
30,33
30,35
30,32
30,36
40,46
40,45
40,47
40,44
40,48
50,57
50,56
50,58
50,55
50,59
60,67
60,66
60,69
60,65
60,68
70,78
70,77
70,80
70,76
70,79
80,88
80,87
80,90
80,86
80,89`,
  minRows: 3,
  parse: (raw) => {
    const r = parseCsv(raw as string, 2, /^line/i);
    if (typeof r === "string") return r;
    for (let i = 0; i < r.length; i++) {
      const actual = parseFloat(r[i][0]);
      const perceived = parseFloat(r[i][1]);
      if (isNaN(actual) || actual <= 0) return `Row ${i+1}: line_length must be a positive number.`;
      if (isNaN(perceived) || perceived <= 0) return `Row ${i+1}: perceived_length must be a positive number.`;
    }
    return r;
  },
  compute: (rows) => {
    const R = rows as string[][];
    const n = R.length;
    const data = R.map(r => ({ actual: parseFloat(r[0]), perceived: parseFloat(r[1]) }));

    const totalError = data.reduce((s, d) => s + (d.perceived - d.actual), 0);
    const meanError = totalError / n;
    const pctErrors = data.map(d => ((d.perceived - d.actual) / d.actual) * 100);
    const meanPctError = pctErrors.reduce((a, b) => a + b, 0) / n;
    const sdPctError = Math.sqrt(pctErrors.reduce((s, e) => s + (e - meanPctError) ** 2, 0) / (n - 1));
    const overestimates = data.filter(d => d.perceived > d.actual).length;
    const underestimates = data.filter(d => d.perceived < d.actual).length;
    const exact = data.filter(d => d.perceived === d.actual).length;

    // Group by actual length
    const groups = new Map<number, { actual: number; perceived: number[] }>();
    for (const d of data) {
      if (!groups.has(d.actual)) groups.set(d.actual, { actual: d.actual, perceived: [] });
      groups.get(d.actual)!.perceived.push(d.perceived);
    }
    const groupRows: StatRow[] = [];
    const sortedKeys = [...groups.keys()].sort((a, b) => a - b);
    for (const key of sortedKeys) {
      const g = groups.get(key)!;
      const meanPerc = g.perceived.reduce((a, b) => a + b, 0) / g.perceived.length;
      const meanErr = ((meanPerc - g.actual) / g.actual) * 100;
      groupRows.push({ label: `${g.actual} mm (n=${g.perceived.length})`, value: `Mean perceived: ${f2(meanPerc)} mm (${meanErr >= 0 ? "+" : ""}${f2(meanErr)}%)` });
    }

    // Correlation between actual and error
    const actuals = data.map(d => d.actual);
    const errors = data.map(d => d.perceived - d.actual);
    const meanActual = actuals.reduce((a, b) => a + b, 0) / n;
    const meanErrAbs = errors.reduce((a, b) => a + b, 0) / n;
    let covAE = 0, varA = 0, varE = 0;
    for (let i = 0; i < n; i++) {
      covAE += (actuals[i] - meanActual) * (errors[i] - meanErrAbs);
      varA += (actuals[i] - meanActual) ** 2;
      varE += (errors[i] - meanErrAbs) ** 2;
    }
    const corrAE = varA > 0 && varE > 0 ? covAE / Math.sqrt(varA * varE) : 0;

    return {
      cards: [
        { label: "Trials", value: n },
        { label: "Mean Illusion Magnitude", value: `${f2(meanError)} mm` },
        { label: "Mean % Error", value: `${f2(meanPctError)}%` },
        { label: "Overestimates", value: overestimates },
      ],
      sections: [
        { title: "Overall Statistics", rows: [
          { label: "Mean absolute error", value: `${f2(meanError)} mm` },
          { label: "Mean percentage error", value: `${f2(meanPctError)}%` },
          { label: "SD of percentage error", value: `${f2(sdPctError)}%` },
          { label: "Overestimates", value: `${overestimates}` },
          { label: "Underestimates", value: `${underestimates}` },
          { label: "Exact matches", value: `${exact}` },
        ]},
        { title: "By Line Length", rows: groupRows },
        { title: "Illusion Scaling", highlight: true, rows: [
          { label: "Correlation (actual length vs. error)", value: f4(corrAE) },
          { label: "Interpretation", value: corrAE > 0.3 ? "Error increases with line length (proportional scaling)" : corrAE < -0.3 ? "Error decreases with line length" : "Error is roughly constant across lengths", accent: true },
        ]},
      ],
    };
  },
  formatLastRow: (row) => {
    const r = row as string[];
    const actual = parseFloat(r[0]);
    const perceived = parseFloat(r[1]);
    const err = perceived - actual;
    return { text: `${actual}mm \u2192 ${perceived}mm (${err >= 0 ? "+" : ""}${f2(err)})`, cls: Math.abs(err) > actual * 0.15 ? "disease" : "healthy" };
  },
};

// ═══════════════════════════════════════════════════════
// Export map
// ═══════════════════════════════════════════════════════
export const perceptionCalcs: Record<string, CalcConfig> = {
  Signal_Detection_Theory: signalDetection,
  Visual_Illusions: visualIllusions,
};
