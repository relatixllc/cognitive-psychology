"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function handle(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    window.dispatchEvent(new Event("consent-changed"));
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          We use cookies for analytics and advertising. See our{" "}
          <Link href="/Privacy_Policy">Privacy Policy</Link> for details.
        </p>
        <div className="cookie-banner-buttons">
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={() => handle("rejected")}
          >
            Reject Non-Essential
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={() => handle("accepted")}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
