"use client";

import CalcShell from "./CalcShell";
import { developmentCalcs } from "./developmentCalcs";

export default function DevelopmentCalc({ slug }: { slug: string }) {
  const config = developmentCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
