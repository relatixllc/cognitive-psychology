"use client";

import { useState, useEffect } from "react";

const MIN = 0;
const MAX = 2;
const LABELS = ["Light", "Normal", "Bold"];

export default function BoldnessToggle() {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const stored = Number(localStorage.getItem("font-weight-level"));
    if (stored >= MIN && stored <= MAX) {
      setLevel(stored);
      applyClass(stored);
    }
  }, []);

  const applyClass = (lvl: number) => {
    document.documentElement.classList.remove("fw-light", "fw-bold");
    if (lvl === 0) document.documentElement.classList.add("fw-light");
    if (lvl === 2) document.documentElement.classList.add("fw-bold");
  };

  const set = (next: number) => {
    setLevel(next);
    applyClass(next);
    localStorage.setItem("font-weight-level", String(next));
  };

  return (
    <span className="text-sizer" style={{ marginRight: ".75rem" }}>
      <button
        className="ts-btn"
        onClick={() => set(Math.max(MIN, level - 1))}
        disabled={level <= MIN}
        aria-label="Decrease font weight"
        title={`Lighter (${LABELS[Math.max(MIN, level - 1)]})`}
      >
        <span style={{ fontWeight: 300, fontSize: ".72rem" }}>B</span>&minus;
      </button>
      <button
        className="ts-btn"
        onClick={() => set(1)}
        disabled={level === 1}
        aria-label="Reset font weight"
        title="Reset (Normal)"
        style={{ fontSize: ".62rem", opacity: level === 1 ? 0.35 : undefined }}
      >
        {LABELS[level]}
      </button>
      <button
        className="ts-btn"
        onClick={() => set(Math.min(MAX, level + 1))}
        disabled={level >= MAX}
        aria-label="Increase font weight"
        title={`Bolder (${LABELS[Math.min(MAX, level + 1)]})`}
      >
        <span style={{ fontWeight: 800, fontSize: ".72rem" }}>B</span>+
      </button>
    </span>
  );
}
