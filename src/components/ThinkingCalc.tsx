"use client";

import CalcShell from "./CalcShell";
import { thinkingCalcs } from "./thinkingCalcs";

export default function ThinkingCalc({ slug }: { slug: string }) {
  const config = thinkingCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
