import type { Route } from "next";

export type metadata = {
	title: string;
	summary: string;
	specs: Array<spec>;
	status: "live" | "archived";
	liveURL?: string;
}

export type spec = {
	label: string;
	value: string;
}

export type CaseStudyNav = {
	prevHref: Route;
	prevLabel: string;
	nextHref: Route;
	nextLabel: string;
}

export type CaseStudyProps = {
	nav: CaseStudyNav;
}