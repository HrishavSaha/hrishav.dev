import type { spec } from "@/types/CaseStudyTypes";

export const padIndex = (index: number) => `${index < 10 ? "0" : ""}${index}`;

export const getSpec = (specs: Array<spec>, label: string) =>
	specs.find((spec) => spec.label === label)?.value ?? "";
