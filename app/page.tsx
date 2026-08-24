import Link from "next/link";

import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import SocialLinks from "@/components/SocialLinks";
import { CaseStudyList, featuredCaseStudyIds } from "@/content/case-study-list";
import { profile } from "@/content/profile";
import { padIndex } from "@/lib/case-study";

/**
 * selected-work grid. to change the column count, update all three numbers:
 * `grid-cols-N`, `nth-child(Nn)` — drops the right hairline off the last card
 * in each row so the grid lines stop at the page edge — and `nth-child(n+N+1)`,
 * which rules off every row after the first.
 */
const FEATURED_GRID = "grid grid-cols-2 [&>*:nth-child(2n)]:border-r-0 [&>*:nth-child(n+3)]:border-t";

export default function Home() {
	return (
		<div className="w-full min-h-[calc(100vh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex border-b border-hairline">
				<div className="flex flex-col w-3/4 px-12 py-30 gap-8 border-r border-hairline">
					<p className="font-mono text-nav text-secondary">01 / index</p>

					<p className="font-sans text-display-lg font-medium text-primary-text">
						i design and build
						<br />
						products end-to-end
						<span className="text-accent animate-cursor-blink">_</span>
					</p>

					<div className="flex gap-6">
					<Button href="/work">
						view work
					</Button>

					<Button href="/contact" variant='secondary'>
						start a project
					</Button>
					</div>
				</div>

				<div className="w-1/4 flex flex-col justify-start p-12 gap-6">
					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">role:</p>
						<p className="text-body-text">{profile.role}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">stack:</p>
						<p className="text-body-text">{profile.stack.join(' · ')}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">based:</p>
						<p className="text-body-text">{profile.based}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">status:</p>
						<p className="text-accent">{profile.status}</p>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between px-12 py-6 border-b border-hairline font-mono text-nav">
				<p className="text-secondary">02 / selected work</p>
				<p className="text-label">
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

			<div className="mt-auto w-full flex items-center justify-between px-12 py-6 border-t border-hairline font-mono text-nav">
				<Link href="/work" className="text-secondary hover:text-body-text transition-all duration-120">
					~/work - see all projects
				</Link>

				<SocialLinks />
			</div>
		</div>
	);
}
