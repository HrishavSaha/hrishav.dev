import type { Route } from "next";

export type metadata = {
	title: string;
	summary: string;
	specs: Array<spec>;
	liveURL?: string;
}

export type spec = {
	label: string;
	value: string;
}

export type CaseStudyNav = {
	prevHref: Route;
	nextHref: Route;
}

export type CaseStudyProps = {
	nav: CaseStudyNav;
}