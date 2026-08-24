import type { Metadata } from "next";
import Button from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "services",
	description:
		"design, development, or both - web or mobile. fixed scope, fixed price and a clear timeline before anything starts, with a written estimate for every project.",
	path: "/services",
});

const padIndex = (index: number) => `${index < 10 ? "0" : ""}${index}`;

type Tier = {
	tag: string;
	title: string;
	price: string;
	features: Array<string>;
	duration: string;
	highlighted?: boolean;
};

const TIERS: Array<Tier> = [
	{
		tag: "design only",
		title: "interface design",
		price: "$200",
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
		features: [
			"react native - ios + android",
			"up to 12 screens, both platforms",
			"native patterns, not a web wrapper",
			"store submission + assets",
		],
		duration: "6-10 weeks",
	},
];

const PROCESS = [
	{
		title: "scope call",
		description: "30 minutes. goals, constraints, budget. written estimate within 2 days.",
	},
	{
		title: "design",
		description: "direction first, then screens. you see work weekly, not at the end.",
	},
	{
		title: "build",
		description: "staging url from day one. review as it's built, not after.",
	},
	{
		title: "launch",
		description: "deploy, performance pass, and a walkthrough so you can run it yourself.",
	},
];

/**
 * cards reflow 1 → 2 → 4 across breakpoints, so the vertical hairlines are
 * applied per breakpoint: every card gets a right border, then the last card in
 * each row has it removed so the lines stop at the page edge. horizontal rules
 * come from each card's own `border-b`.
 */
const CARD_GRID =
	"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-b [&>*]:border-hairline sm:[&>*]:border-r sm:[&>*:nth-child(2n)]:border-r-0 lg:[&>*:nth-child(2n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0";

export default function Services() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16 border-b border-hairline">
				<p className="font-mono text-nav text-secondary">01 / services</p>

				<p className="font-sans text-display-xs sm:text-display-md lg:text-display-lg font-medium text-primary-text">
					design, development, or both - web or mobile
				</p>

				<p className="w-full lg:w-1/2 font-sans text-body text-body-text">
					fixed scope, fixed price, and a clear timeline before anything starts. prices below
					are starting points - every project gets a written estimate first.
				</p>
			</div>

			<div className={`w-full ${CARD_GRID}`}>
				{TIERS.map((tier) => (
					<div key={tier.title} className="flex flex-col gap-6 px-6 py-10 sm:px-8">
						<div className="flex items-center justify-between font-mono text-metadata text-label">
							<p>{padIndex(TIERS.indexOf(tier) + 1)}</p>
							<p className={tier.highlighted ? "text-accent" : ""}>{tier.tag}</p>
						</div>

						<div className="flex flex-col gap-1">
							<p className="font-sans text-heading-sm font-medium text-primary-text">
								{tier.title}
							</p>
							<p className="font-mono text-nav">
								<span className="text-heading-lg font-bold text-primary-text">{tier.price}</span>{" "}
								<span className="text-label">from</span>
							</p>
						</div>

						<div className="flex-1 flex flex-col">
							{tier.features.map((feature) => (
								<p key={feature} className="py-2 border-b border-hairline-inner font-mono text-nav text-body-text">
									{feature}
								</p>
							))}
						</div>

						<p className="font-mono text-nav text-label">duration: {tier.duration}</p>

						<Button
							href="/contact"
							variant={tier.highlighted ? "primary" : "secondary"}
							className="w-full"
						>
							enquire
						</Button>
					</div>
				))}
			</div>

			<div className="w-full flex flex-col lg:flex-row">
				<div className="w-full lg:w-1/5 px-6 py-8 sm:px-12 lg:py-16 border-b lg:border-r border-hairline">
					<p className="font-mono text-nav text-secondary">02 / process</p>
				</div>

				<div className={`flex-1 ${CARD_GRID}`}>
					{PROCESS.map((step, index) => (
						<div key={step.title} className="flex flex-col gap-2 px-6 py-8 sm:px-8 lg:py-16">
							<p className="font-mono text-metadata text-label">{padIndex(index + 1)}</p>
							<p className="font-mono text-nav font-bold text-primary-text">{step.title}</p>
							<p className="font-mono text-metadata text-label">{step.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 px-6 py-10 sm:px-12">
				<p className="font-sans text-heading-sm font-medium text-primary-text">
					have a project in mind?
				</p>

				<Button href="/contact" className="w-full sm:w-auto">start a project</Button>
			</div>
		</div>
	);
}
