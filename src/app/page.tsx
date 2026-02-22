"use client";

import { useState } from "react";
import {
  concepts,
  theoryModels,
  methods,
  categories,
} from "@/data/psychology";

export default function Home() {
  const [activeSection, setActiveSection] = useState("concepts");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilter = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredConcepts = concepts.filter(
    (v) =>
      !searchQuery ||
      searchFilter(v.name) ||
      searchFilter(v.description) ||
      searchFilter(v.symbol)
  );

  const filteredTheories = (
    categoryFilter === "all"
      ? theoryModels
      : theoryModels.filter((s) => s.category === categoryFilter)
  ).filter(
    (s) =>
      !searchQuery ||
      searchFilter(s.name) ||
      searchFilter(s.description) ||
      searchFilter(s.category)
  );

  const filteredMethods = (
    methodFilter === "all"
      ? methods
      : methods.filter((d) => d.type === methodFilter)
  ).filter(
    (d) =>
      !searchQuery ||
      searchFilter(d.name) ||
      searchFilter(d.description) ||
      searchFilter(d.cognitiveUse)
  );

  const tabs = [
    { id: "concepts", label: "Key Concepts", count: concepts.length },
    { id: "theories", label: "Theories & Models", count: theoryModels.length },
    { id: "methods", label: "Research Methods", count: methods.length },
  ];

  return (
    <>
      {/* ── Intro ── */}
      <section className="intro">
        <div className="intro-inner">
          <div className="intro-label">
            <span className="intro-dot" /> A Complete Reference
          </div>
          <h1 className="intro-title">
            Cognitive <span className="intro-accent">Psychology</span>
          </h1>
          <div className="intro-text">
            <p>
              Cognitive psychology is the scientific study of mental processes
              &mdash; how people perceive, attend, remember, think, solve
              problems, and use language. It examines the internal mechanisms
              that underlie human thought and behavior.
            </p>
            <p>
              From the sensory systems that construct our experience of the
              world, through the attention mechanisms that select what we
              process, to the memory systems that store and retrieve
              knowledge &mdash; cognitive psychology maps the architecture
              of the mind.
            </p>
            <p>
              This reference covers the full landscape &mdash; from foundational
              theories of perception and attention through memory, learning,
              language, and reasoning, to modern applications in education,
              clinical practice, AI, and neuroscience.
            </p>
          </div>
          <div className="intro-formula">
            <code>Mind = f(perception, attention, memory, language, thought)</code>
          </div>
        </div>
        <div className="intro-pattern" aria-hidden="true" />
      </section>

      {/* ── Nav Tabs ── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nt${activeSection === tab.id ? " active" : ""}`}
                onClick={() => setActiveSection(tab.id)}
              >
                {tab.label} <span className="nc">{tab.count}</span>
              </button>
            ))}
          </div>
          <div className="sb">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search…"
              className="si"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="mc">
        {/* Key Concepts */}
        {activeSection === "concepts" && (
          <div>
            <div className="sh">
              <h2 className="st">Key Concepts</h2>
              <p className="sd">Core constructs and processes studied in cognitive psychology.</p>
            </div>
            <div className="vg">
              {filteredConcepts.map((v) => (
                <div key={v.name} className="vc">
                  <div className="vt">
                    <span className="vs">{v.symbol}</span>
                    <h3 className="vn">{v.name}</h3>
                  </div>
                  <p className="vd">{v.description}</p>
                  {v.formula && (
                    <div className="fbl"><code>{v.formula}</code></div>
                  )}
                  {v.example && (
                    <div className="eb">
                      <span className="el">Example</span>
                      <p>{v.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Theories & Models */}
        {activeSection === "theories" && (
          <div>
            <div className="sh">
              <h2 className="st">Theories &amp; Models</h2>
              <p className="sd">Major theoretical frameworks that explain cognitive processes and their interactions.</p>
              <div className="fb">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`fbt${categoryFilter === cat.id ? " active" : ""}`}
                    onClick={() => setCategoryFilter(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="tl">
              {filteredTheories.map((s) => (
                <div key={s.name} className="tc">
                  <div className="th">
                    <span className="tb" style={{ background: s.color }}>{s.category}</span>
                    <h3 className="tn">{s.name}</h3>
                  </div>
                  <p className="td">{s.description}</p>
                  {s.formula && (
                    <div className="fbl"><code>{s.formula}</code></div>
                  )}
                  <div className="ub">
                    <p>{s.useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Methods */}
        {activeSection === "methods" && (
          <div>
            <div className="sh">
              <h2 className="st">Research Methods</h2>
              <p className="sd">Techniques and paradigms used to study cognitive processes in the laboratory and beyond.</p>
              <div className="fb">
                {[
                  { id: "all", label: "All" },
                  { id: "behavioral", label: "Behavioral" },
                  { id: "neuroimaging", label: "Neuroimaging" },
                ].map((f) => (
                  <button
                    key={f.id}
                    className={`fbt${methodFilter === f.id ? " active" : ""}`}
                    onClick={() => setMethodFilter(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="dg">
              {filteredMethods.map((d) => (
                <div key={d.name} className="dc">
                  <div className="dh">
                    <h3 className="dn">{d.name}</h3>
                    <span className={`dtb ${d.type === "behavioral" ? "c" : "d"}`}>{d.type}</span>
                  </div>
                  <p className="dd">{d.description}</p>
                  <div className="dm">
                    <div className="dmi"><code>{d.parameters}</code></div>
                    <div className="dmi"><code>{d.support}</code></div>
                  </div>
                  <div className="du"><p>{d.cognitiveUse}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
