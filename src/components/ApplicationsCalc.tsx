"use client";

import CalcShell from "./CalcShell";
import { applicationsCalcs } from "./applicationsCalcs";

export default function ApplicationsCalc({ slug }: { slug: string }) {
  const config = applicationsCalcs[slug];
  if (!config) return null;
  return <CalcShell {...config} />;
}
