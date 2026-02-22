"use client";

import CalcShell from "./CalcShell";
import { keyFiguresCalcs } from "./keyFiguresCalcs";

export default function KeyFiguresCalc({ slug }: { slug: string }) {
  const config = keyFiguresCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
