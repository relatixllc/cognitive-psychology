"use client";

import CalcShell from "./CalcShell";
import { neuroscienceCalcs } from "./neuroscienceCalcs";

export default function NeuroscienceCalc({ slug }: { slug: string }) {
  const config = neuroscienceCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
