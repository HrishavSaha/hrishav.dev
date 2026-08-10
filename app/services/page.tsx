import Button from "@/components/Button";

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

export default function Services() {
	return (
		<div className="w-full min-h-[calc(100vh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex flex-col gap-8 px-12 py-16 border-b border-hairline">
				<p className="font-mono text-nav text-secondary">01 / services</p>

				<p className="font-sans text-display-lg font-medium text-primary-text">
					design, development, or both - web or mobile
				</p>

				<p className="w-1/2 font-sans text-body text-body-text">
					fixed scope, fixed price, and a clear timeline before anything starts. prices below
					are starting points - every project gets a written estimate first.
				</p>
			</div>

			<div className="w-full grid grid-cols-4 divide-x divide-hairline border-b border-hairline">
				{TIERS.map((tier) => (
					<div key={tier.title} className="flex flex-col gap-6 px-8 py-10">
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

			<div className="w-full flex border-b border-hairline">
				<div className="w-1/5 px-12 py-16 border-r border-hairline">
					<p className="font-mono text-nav text-secondary">02 / process</p>
				</div>

				<div className="flex-1 grid grid-cols-4 divide-x divide-hairline">
					{PROCESS.map((step, index) => (
						<div key={step.title} className="flex flex-col gap-2 px-8 py-16">
							<p className="font-mono text-metadata text-label">{padIndex(index + 1)}</p>
							<p className="font-mono text-nav font-bold text-primary-text">{step.title}</p>
							<p className="font-mono text-metadata text-label">{step.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-auto w-full flex items-center justify-between px-12 py-10">
				<p className="font-sans text-heading-sm font-medium text-primary-text">
					have a project in mind?
				</p>

				<Button href="/contact">start a project</Button>
			</div>
		</div>
	);
}
