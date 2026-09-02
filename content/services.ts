export type Tier = {
	tag: string;
	title: string;
	price: string;
	/** one line for the home page rows — /services shows `features` instead */
	summary: string;
	features: Array<string>;
	duration: string;
	highlighted?: boolean;
};

export const serviceTiers: Array<Tier> = [
	{
		tag: "design only",
		title: "interface design",
		price: "$200",
		summary: "screens, components and tokens - handed off ready to build.",
		features: [
			"up to 8 screens, desktop + mobile",
			"component library + tokens",
			"2 revision rounds",
			"dev-ready handoff",
		],
		duration: "2-3 weeks",
	},
	{
		tag: "most common",
		title: "design + build",
		price: "$350",
		summary: "the whole thing - designed, built in next.js, and deployed.",
		features: [
			"everything in 01",
			"next.js + typescript build",
			"cms or plain-file content system",
			"domain, deploy, 90+ lighthouse",
			"handover walkthrough",
		],
		duration: "4-6 weeks",
		highlighted: true,
	},
	{
		tag: "build only",
		title: "front-end build",
		price: "$200",
		summary: "your design, built faithfully and shipped.",
		features: [
			"your design, built faithfully",
			"responsive + accessible",
			"image pipeline + performance pass",
			"deployment included",
		],
		duration: "1-4 weeks",
	},
	{
		tag: "mobile",
		title: "app design + build",
		price: "$400",
		summary: "react native for ios and android - native patterns, not a wrapper.",
		features: [
			"react native - ios + android",
			"up to 12 screens, both platforms",
			"native patterns, not a web wrapper",
			"store submission + assets",
		],
		duration: "6-10 weeks",
	},
];
