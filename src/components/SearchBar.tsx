"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { topMenus } from "@/data/menus";

interface SearchEntry {
  slug: string;
  label: string;
  category: string;
}

// Build flat search index at module level
const searchIndex: SearchEntry[] = topMenus.flatMap((menu) =>
  menu.groups.flatMap((group) =>
    group.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      category: `${menu.title} › ${group.groupLabel}`,
    }))
  )
);

// Deduplicate by slug (some articles appear in multiple menus)
const seen = new Set<string>();
const uniqueIndex: SearchEntry[] = searchIndex.filter((entry) => {
  if (seen.has(entry.slug)) return false;
  seen.add(entry.slug);
  return true;
});

export default function SearchBar({ onFocus }: { onFocus?: () => void }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results =
    query.length >= 1
      ? uniqueIndex
          .filter((e) => e.label.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 10)
      : [];

  const close = useCallback(() => {
    setOpen(false);
    setHighlightIdx(-1);
  }, []);

  // Click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [close]);

  const navigate = (slug: string) => {
    close();
    setQuery("");
    inputRef.current?.blur();
    router.push(`/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIdx((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIdx((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && highlightIdx >= 0 && results[highlightIdx]) {
      e.preventDefault();
      navigate(results[highlightIdx].slug);
    } else if (e.key === "Escape") {
      close();
      inputRef.current?.blur();
    }
  };

  return (
    <div className="search-bar" ref={wrapRef}>
      <svg className="search-bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        ref={inputRef}
        className="search-bar-input"
        type="text"
        placeholder="Search articles..."
        aria-label="Search articles"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setHighlightIdx(-1);
        }}
        onFocus={() => {
          if (query.length >= 1) setOpen(true);
          onFocus?.();
        }}
        onKeyDown={handleKeyDown}
      />
      {open && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((r, i) => (
            <button
              key={r.slug}
              className={`search-result${i === highlightIdx ? " hl" : ""}`}
              onMouseEnter={() => setHighlightIdx(i)}
              onMouseDown={(e) => {
                e.preventDefault(); // prevent blur before click
                navigate(r.slug);
              }}
            >
              <span className="search-result-label">{r.label}</span>
              <span className="search-result-cat">{r.category}</span>
            </button>
          ))}
        </div>
      )}
      {open && query.length >= 1 && results.length === 0 && (
        <div className="search-dropdown">
          <div className="search-empty">No articles found</div>
        </div>
      )}
    </div>
  );
}
