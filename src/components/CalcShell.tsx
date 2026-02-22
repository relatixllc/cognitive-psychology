"use client";

import { useState, useRef, useCallback } from "react";

/* ── Shared result types ── */
export interface StatCard { label: string; value: string | number }
export interface StatRow  { label: string; value: string; accent?: boolean }
export interface StatSection { title: string; highlight?: boolean; rows: StatRow[] }
export interface CalcOutput { cards: StatCard[]; sections: StatSection[] }

/* ── Config each calculator provides ── */
export interface CalcConfig {
  title: string;
  description: string;
  dataLabel?: string;
  defaultData: string;
  parse: (raw: string) => unknown[] | string;
  compute: (rows: unknown[]) => CalcOutput | string;
  minRows: number;
  formatLastRow?: (row: unknown) => { text: string; cls?: string };
}

/* ── Generic calculator shell ── */
export default function CalcShell({
  title, description, dataLabel, defaultData, parse, compute, minRows, formatLastRow,
}: CalcConfig) {
  const [data, setData] = useState(defaultData);
  const [results, setResults] = useState<CalcOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [animCount, setAnimCount] = useState(0);
  const [animTotal, setAnimTotal] = useState(0);
  const [lastRow, setLastRow] = useState<unknown>(null);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopAnimation = useCallback(() => {
    if (animRef.current) { clearTimeout(animRef.current); animRef.current = null; }
    setAnimating(false); setAnimCount(0); setAnimTotal(0); setLastRow(null);
  }, []);

  const calculate = () => {
    stopAnimation();
    const rows = parse(data);
    if (typeof rows === "string") { setError(rows); setResults(null); return; }
    const out = compute(rows);
    if (typeof out === "string") { setError(out); setResults(null); return; }
    setError(null); setResults(out);
  };

  const animate = () => {
    stopAnimation();
    const rows = parse(data);
    if (typeof rows === "string") { setError(rows); setResults(null); return; }
    if (rows.length < minRows) { setError(`Need at least ${minRows} rows to compute.`); return; }
    setError(null); setAnimating(true); setAnimTotal(rows.length);
    let idx = minRows;
    const step = () => {
      const slice = rows.slice(0, idx);
      const out = compute(slice);
      if (typeof out !== "string") { setResults(out); setAnimCount(idx); setLastRow(rows[idx - 1]); }
      idx++;
      if (idx <= rows.length) { animRef.current = setTimeout(step, 500); }
      else { setAnimating(false); animRef.current = null; }
    };
    step();
  };

  const fmtRow = lastRow && formatLastRow ? formatLastRow(lastRow) : null;

  return (
    <div className="bayes-calc">
      <h2>{title}</h2>
      <p className="bayes-calc-desc" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="bayes-calc-grid">
        <div className="bayes-calc-input">
          <label className="bayes-calc-label">{dataLabel || "Dataset (CSV)"}</label>
          <textarea className="bayes-calc-textarea" value={data} onChange={(e) => setData(e.target.value)} spellCheck={false} disabled={animating} />
          <div className="bayes-calc-btns">
            <button className="bayes-calc-btn" onClick={calculate} disabled={animating}>Calculate</button>
            <button className={`bayes-calc-btn bayes-calc-btn-anim${animating ? " active" : ""}`} onClick={animating ? stopAnimation : animate}>
              {animating ? "Stop" : "Animate"}
            </button>
          </div>
        </div>
        <div className="bayes-calc-output">
          {error && <div className="bayes-calc-error">{error}</div>}
          {animating && (
            <div className="bayes-calc-progress">
              <div className="bayes-calc-progress-bar">
                <div className="bayes-calc-progress-fill" style={{ width: animTotal > 0 ? `${(animCount / animTotal) * 100}%` : "0%" }} />
              </div>
              <span className="bayes-calc-progress-text">
                Record {animCount} of {animTotal}
                {fmtRow && <span className={`bayes-calc-last-row ${fmtRow.cls || ""}`}> &mdash; {fmtRow.text}</span>}
              </span>
            </div>
          )}
          {results && (
            <>
              {results.cards.length > 0 && (
                <div className="bayes-calc-section">
                  <span className="bayes-calc-section-title">Summary</span>
                  <div className="bayes-calc-stats">
                    {results.cards.map((c) => (
                      <div key={c.label} className="bayes-calc-stat">
                        <span className="bayes-calc-stat-value">{c.value}</span>
                        <span className="bayes-calc-stat-label">{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {results.sections.map((s) => (
                <div key={s.title} className={`bayes-calc-section${s.highlight ? " bayes-calc-highlight" : ""}`}>
                  <span className="bayes-calc-section-title">{s.title}</span>
                  <dl className="bayes-calc-dl">
                    {s.rows.map((r) => (
                      <div key={r.label} className={`bayes-calc-dl-row${r.accent ? " accent" : ""}`}>
                        <dt>{r.label}</dt>
                        <dd>{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </>
          )}
          {!results && !error && (
            <div className="bayes-calc-placeholder">
              Click <strong>Calculate</strong> to see results, or <strong>Animate</strong> to watch the statistics update one record at a time.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
