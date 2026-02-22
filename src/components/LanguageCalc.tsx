"use client";

import CalcShell from "./CalcShell";
import { languageCalcs } from "./languageCalcs";

export default function LanguageCalc({ slug }: { slug: string }) {
  const config = languageCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
