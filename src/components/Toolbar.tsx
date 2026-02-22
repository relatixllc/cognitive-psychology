"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { topMenus } from "@/data/menus";
import SearchBar from "./SearchBar";

export default function Toolbar() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenIdx(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);
  const alignRight = (i: number) => i >= topMenus.length - 3;

  return (
    <div className="toolbar" ref={ref}>
      <div className="toolbar-inner">
        <Link href="/" className="toolbar-brand">
          Cognitive <i>Psychology</i>
        </Link>
        <SearchBar onFocus={() => setOpenIdx(null)} />
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className={`toolbar-menus${mobileOpen ? " mob" : ""}`}>
          {topMenus.map((menu, i) => (
            <div key={menu.title} className={`mi${openIdx === i ? " open" : ""}${alignRight(i) ? " ar" : ""}`}>
              <button className="mt" onClick={() => toggle(i)}>
                {menu.title}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="md">
                {menu.groups.map((g) => (
                  <div key={g.groupLabel}>
                    <span className="mg">{g.groupLabel}</span>
                    {g.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="ml"
                        onClick={() => { setOpenIdx(null); setMobileOpen(false); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
