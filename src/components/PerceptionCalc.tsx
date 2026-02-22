"use client";

import CalcShell from "./CalcShell";
import { perceptionCalcs } from "./perceptionCalcs";

export default function PerceptionCalc({ slug }: { slug: string }) {
  const config = perceptionCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
