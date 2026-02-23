"use client";

import { useState, useEffect } from "react";

const MIN = 12;
const MAX = 32;
const STEP = 2;
const DEFAULT = 16;

export default function TextSizer() {
  const [px, setPx] = useState(DEFAULT);

  useEffect(() => {
    const stored = Number(localStorage.getItem("text-size-px"));
    if (stored >= MIN && stored <= MAX) {
      setPx(stored);
      document.documentElement.style.fontSize = stored + "px";
    }
  }, []);

  const apply = (next: number) => {
    setPx(next);
    document.documentElement.style.fontSize = next + "px";
    localStorage.setItem("text-size-px", String(next));
  };

  return (
    <span className="text-sizer">
      <button
        className="ts-btn"
        onClick={() => apply(Math.max(MIN, px - STEP))}
        disabled={px <= MIN}
        aria-label="Decrease text size"
        title={`Smaller (${Math.round((Math.max(MIN, px - STEP) / DEFAULT) * 100)}%)`}
      >
        A&minus;
      </button>
      <button
        className="ts-btn"
        onClick={() => apply(DEFAULT)}
        disabled={px === DEFAULT}
        aria-label="Reset text size"
        title="Reset (100%)"
        style={{ fontSize: ".62rem", opacity: px === DEFAULT ? 0.35 : undefined }}
      >
        {Math.round((px / DEFAULT) * 100)}%
      </button>
      <button
        className="ts-btn"
        onClick={() => apply(Math.min(MAX, px + STEP))}
        disabled={px >= MAX}
        aria-label="Increase text size"
        title={`Larger (${Math.round((Math.min(MAX, px + STEP) / DEFAULT) * 100)}%)`}
      >
        A+
      </button>
    </span>
  );
}
