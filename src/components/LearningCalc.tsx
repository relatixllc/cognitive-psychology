"use client";

import CalcShell from "./CalcShell";
import { learningCalcs } from "./learningCalcs";

export default function LearningCalc({ slug }: { slug: string }) {
  const config = learningCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
