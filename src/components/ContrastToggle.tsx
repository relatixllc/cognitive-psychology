"use client";

import { useState, useEffect } from "react";

export default function ContrastToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("high-contrast") === "1") {
      setOn(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.classList.toggle("high-contrast", next);
    localStorage.setItem("high-contrast", next ? "1" : "0");
  };

  return (
    <button
      className={`ts-btn${on ? " active" : ""}`}
      onClick={toggle}
      aria-label={on ? "Disable high contrast" : "Enable high contrast"}
      title={on ? "High contrast: ON" : "High contrast: OFF"}
      style={{ marginRight: ".75rem" }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: "middle" }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
      </svg>
    </button>
  );
}
