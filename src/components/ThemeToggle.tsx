"use client";

import { useState, useEffect } from "react";

const THEMES = ["dark", "default", "light"] as const;
type Theme = (typeof THEMES)[number];
const LABELS: Record<Theme, string> = { dark: "Dark", default: "Normal", light: "Light" };

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("default");

  useEffect(() => {
    const stored = localStorage.getItem("theme-mode") as Theme | null;
    if (stored && THEMES.includes(stored)) {
      setTheme(stored);
      applyTheme(stored);
    }
  }, []);

  const applyTheme = (t: Theme) => {
    document.documentElement.classList.remove("theme-dark", "theme-light");
    if (t !== "default") document.documentElement.classList.add(`theme-${t}`);
  };

  const set = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    localStorage.setItem("theme-mode", t);
  };

  const idx = THEMES.indexOf(theme);

  return (
    <span className="text-sizer" style={{ marginRight: ".75rem" }}>
      <button
        className={`ts-btn${theme === "dark" ? " active" : ""}`}
        onClick={() => set(THEMES[Math.max(0, idx - 1)])}
        disabled={idx <= 0}
        aria-label="Darker theme"
        title="Darker"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: "middle" }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      <button
        className="ts-btn"
        onClick={() => set("default")}
        disabled={theme === "default"}
        aria-label="Reset theme"
        title="Reset (Normal)"
        style={{ fontSize: ".62rem", opacity: theme === "default" ? 0.35 : undefined }}
      >
        {LABELS[theme]}
      </button>
      <button
        className={`ts-btn${theme === "light" ? " active" : ""}`}
        onClick={() => set(THEMES[Math.min(THEMES.length - 1, idx + 1)])}
        disabled={idx >= THEMES.length - 1}
        aria-label="Lighter theme"
        title="Lighter"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: "middle" }}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </span>
  );
}
