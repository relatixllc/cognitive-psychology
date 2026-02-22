"use client";

import CalcShell from "./CalcShell";
import { attentionCalcs } from "./attentionCalcs";

export default function AttentionCalc({ slug }: { slug: string }) {
  const config = attentionCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
