import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "about",
	description:
		"designer and developer in equal measure - i work across the whole span of a product, from interface design through to shipped production front-end, for small teams and independent clients.",
	path: "/about",
});

const padIndex = (index: number) => `${index < 10 ? "0" : ""}${index}`;

const SKILLS = {
	development: [
		"next.js · react · typescript",
		"react native - mobile apps",
		"tailwind · framer motion",
		"performance & deployment",
	],
	design: [
		"product & interface design",
		"design systems",
		"prototyping",
	],
};

const HOW_I_WORK = [
	"one person for the whole project: design through to deployed front-end.",
	"you see the work weekly, on a staging url, not at the end.",
	"scope and price agreed in writing before anything starts.",
];

export default function About() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col lg:flex-row border-b border-hairline">
			<div className="w-full lg:w-1/2 flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-hairline">
				<p className="font-mono text-nav text-secondary">01 / about</p>

				<p className="font-sans text-display-xs sm:text-display-sm lg:text-display-md font-medium text-primary-text">
					designer and developer
					<br />
					in equal measure
				</p>

				<p className="font-sans text-body text-body-text">
					i work across the whole span of a product: interface design through to shipped,
					production front-end. that means fewer handoffs, fewer things lost in translation, and
					decisions made with both craft and constraints in view.
				</p>

				<p className="font-sans text-body text-body-text">
					most of my work is with small teams and independent clients who need one person who can
					hold the whole thing - not a designer waiting on a developer, or the reverse.
				</p>

				<div className="relative flex-1 w-full border border-hairline-inner bg-surface-raised min-h-80 sm:min-h-96 lg:min-h-100">
					<Image
						src="/images/portrait.jpg"
						alt={`${profile.name} - portrait`}
						fill
						loading='eager'
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="object-cover object-center"
					/>
				</div>
			</div>

			<div className="w-full lg:w-1/2 flex flex-col">
				<div className="flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16">
					<p className="font-mono text-nav text-secondary">02 / skills</p>

					<div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
						<div className="flex-1 flex flex-col gap-2">
							<p className="font-mono text-metadata text-label">development</p>
							{SKILLS.development.map((skill) => (
								<p key={skill} className="py-2 border-b border-hairline-inner font-mono text-nav text-body-text">
									{skill}
								</p>
							))}
						</div>

						<div className="flex-1 flex flex-col gap-2">
							<p className="font-mono text-metadata text-label">design</p>
							{SKILLS.design.map((skill) => (
								<p key={skill} className="py-2 border-b border-hairline-inner font-mono text-nav text-body-text">
									{skill}
								</p>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6 px-6 py-12 sm:px-12 lg:py-16">
					<p className="font-mono text-nav text-secondary">03 / how i work</p>

					{HOW_I_WORK.map((step, index) => (
						<div key={step} className="flex gap-4 py-3 border-b border-hairline-inner font-mono text-nav">
							<p className="text-label shrink-0">{padIndex(index + 1)}</p>
							<p className="text-body-text">{step}</p>
						</div>
					))}
				</div>

				<div className="m-6 sm:m-12 mt-auto p-6 border border-hairline-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="flex flex-col gap-1">
						<p className="font-mono text-metadata text-label">currently</p>
						<p className="font-mono text-nav font-bold text-accent">
							taking on two projects for q3 2026
						</p>
					</div>

					<Link
						href="/contact"
						className="font-mono text-nav text-secondary hover:text-primary-text transition-all duration-120 shrink-0"
					>
						[ get in touch ]
					</Link>
				</div>
			</div>
		</div>
	);
}
