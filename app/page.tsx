import Link from "next/link";

import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import SocialLinks from "@/components/SocialLinks";
import { CaseStudyList, featuredCaseStudyIds } from "@/content/case-study-list";
import { profile } from "@/content/profile";
import { padIndex } from "@/lib/case-study";

/**
 * selected-work grid — one column on mobile, two from `lg` up. to change the
 * desktop column count, update `lg:grid-cols-N` and the matching `nth-child(Nn)`,
 * which drops the right hairline off the last card in each row so the grid lines
 * stop at the page edge. the horizontal rules live on the card itself.
 */
const FEATURED_GRID = "grid grid-cols-1 lg:grid-cols-2 lg:[&>*]:border-r lg:[&>*:nth-child(2n)]:border-r-0";

const META = [
	{ label: "role", value: profile.role },
	{ label: "stack", value: profile.stack.join(" · ") },
	{ label: "based", value: profile.based },
	{ label: "status", value: profile.status, accent: true },
];

export default function Home() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex flex-col lg:flex-row border-b border-hairline">
				<div className="flex flex-col w-full lg:w-2/3 xl:w-3/4 px-6 py-16 sm:px-12 sm:py-24 lg:py-30 gap-8 border-b lg:border-b-0 lg:border-r border-hairline">
					<p className="font-mono text-nav text-secondary">01 / index</p>

					<p className="font-sans text-display-xs sm:text-display-md lg:text-display-lg font-medium text-primary-text">
						i design and build
						<br />
						products end-to-end
						<span className="text-accent animate-cursor-blink">_</span>
					</p>

					<div className="flex flex-wrap gap-4 sm:gap-6">
					<Button href="/work">
						view work
					</Button>

					<Button href="/contact" variant='secondary'>
						start a project
					</Button>
					</div>
				</div>

				<div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col justify-start px-6 py-10 sm:p-12 lg:p-8 xl:p-12 gap-6">
					{META.map((meta) => (
						<div key={meta.label} className="flex py-1 gap-4 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
							<p className="text-label shrink-0">{meta.label}:</p>
							<p className={`text-right ${meta.accent ? "text-accent" : "text-body-text"}`}>{meta.value}</p>
						</div>
					))}
				</div>
			</div>

			<div className="w-full flex items-center justify-between gap-4 px-6 sm:px-12 py-6 border-b border-hairline font-mono text-nav">
				<p className="text-secondary">02 / selected work</p>
				<p className="text-label shrink-0">
					{padIndex(featuredCaseStudyIds.length)} project{featuredCaseStudyIds.length === 1 ? "" : "s"}
				</p>
			</div>

			<div className={FEATURED_GRID}>
				{featuredCaseStudyIds.map((id, index) => (
					<CaseStudyCard
						key={id}
						id={id}
						index={index + 1}
						entry={CaseStudyList[id]}
					/>
				))}
			</div>

			<div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 sm:px-12 py-6 font-mono text-nav">
				<Link href="/work" className="text-secondary hover:text-body-text transition-all duration-120">
					~/work - see all projects
				</Link>

				<SocialLinks />
			</div>
		</div>
	);
}
