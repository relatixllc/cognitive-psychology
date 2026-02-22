"use client";

import CalcShell from "./CalcShell";
import { memoryCalcs } from "./memoryCalcs";

export default function MemoryCalc({ slug }: { slug: string }) {
  const config = memoryCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
