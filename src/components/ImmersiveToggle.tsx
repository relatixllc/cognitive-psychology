"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ImmersiveToggle() {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && document.documentElement.classList.contains("immersive")) {
        exit();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const enter = () => {
    setOn(true);
    document.documentElement.classList.add("immersive");
  };

  const exit = () => {
    setOn(false);
    document.documentElement.classList.remove("immersive");
  };

  const toggle = () => (on ? exit() : enter());

  return (
    <>
      <button
        className={`ts-btn${on ? " active" : ""}`}
        onClick={toggle}
        aria-label={on ? "Exit immersive mode" : "Enter immersive mode"}
        title={on ? "Immersive: ON" : "Immersive: OFF"}
        style={{ marginRight: ".75rem" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: "middle" }}>
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </button>

      {on && mounted && createPortal(
        <button
          className="immersive-exit"
          onClick={exit}
          aria-label="Exit immersive mode"
          title="Exit immersive mode (Esc)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>,
        document.body
      )}
    </>
  );
}
