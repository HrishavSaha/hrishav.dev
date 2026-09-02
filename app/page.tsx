import type { Metadata } from "next";
import Link from "next/link";

import Button, { buttonStyles } from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import DetailRow from "@/components/DetailRow";
import JsonLd from "@/components/JsonLd";
import SectionBar from "@/components/SectionBar";
import SocialLinks from "@/components/SocialLinks";
import Testimonial from "@/components/Testimonial";
import { CaseStudyList, featuredCaseStudyIds } from "@/content/case-study-list";
import { profile } from "@/content/profile";
import { serviceTiers } from "@/content/services";
import { site } from "@/content/site";
import { featuredTestimonial } from "@/content/testimonials";
import { padIndex } from "@/lib/case-study";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
	...pageMetadata({
		title: site.name,
		socialTitle: site.title,
		description: site.description,
		path: "/",
	}),
	// absolute: the root default already reads as the home title, unsuffixed
	title: { absolute: site.title },
};

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

const FOOTER_LINK = "text-secondary hover:text-body-text transition-all duration-120";

export default function Home() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col">
			<JsonLd />

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

			<SectionBar
				index={2}
				label="selected work"
				meta={`${padIndex(featuredCaseStudyIds.length)} project${featuredCaseStudyIds.length === 1 ? "" : "s"}`}
			/>

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

			<SectionBar index={3} label="what clients say" />

			<div className="w-full flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16 border-b border-hairline">
				<Testimonial
					size="display"
					quote={featuredTestimonial.excerpt ?? featuredTestimonial.quote}
					author={featuredTestimonial.author}
					source={featuredTestimonial.source}
				/>

				{featuredTestimonial.caseStudyId ? (
					<Link href={`/work/${featuredTestimonial.caseStudyId}`} className={`font-mono text-nav ${FOOTER_LINK}`}>
						~/work/{featuredTestimonial.caseStudyId} - read the case study →
					</Link>
				) : null}
			</div>

			<SectionBar index={4} label="services" />

			<div className="w-full flex flex-col px-6 sm:px-12 border-b border-hairline">
				{serviceTiers.map((tier, index) => (
					<div
						key={tier.title}
						className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-hairline-inner last:border-b-0"
					>
						<p className="font-mono text-metadata text-label shrink-0">{padIndex(index + 1)}</p>

						<div className="flex-1 flex flex-col gap-1">
							<div className="flex flex-wrap items-baseline gap-3">
								<p className="font-sans text-heading-sm font-medium text-primary-text">{tier.title}</p>
								{tier.highlighted ? (
									<p className="font-mono text-metadata text-accent">{tier.tag}</p>
								) : null}
							</div>
							<p className="font-mono text-metadata text-label">{tier.summary}</p>
						</div>

						{/* on mobile the two values sit at either end of their own row,
						    rather than stacking under a title that's already left-aligned */}
						<div className="flex items-baseline justify-between sm:justify-end gap-6 sm:shrink-0 font-mono text-nav">
							<p className="text-label">{tier.duration}</p>
							<p className="text-label">
								from{" "}
								<span className={`font-bold ${tier.highlighted ? "text-accent" : "text-primary-text"}`}>
									{tier.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full px-6 sm:px-12 py-6 border-b border-hairline font-mono text-nav">
				<Link href="/services" className={FOOTER_LINK}>
					~/services - full breakdown, features and process →
				</Link>
			</div>

			<SectionBar index={5} label="start a project" />

			<div className="w-full flex flex-col lg:flex-row border-b border-hairline">
				<div className="w-full lg:w-1/2 flex flex-col gap-6 px-6 py-12 sm:px-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-hairline">
					<p className="font-sans text-heading-sm sm:text-heading-lg font-medium text-primary-text">
						send a brief
					</p>

					<p className="font-sans text-body text-body-text">
						a couple of sentences is enough to start - what you&apos;re building, roughly when
						you need it, and any budget you have in mind.
					</p>

					<Button href="/contact#brief" className="self-start">send a brief</Button>

					<DetailRow label="response" value="< 24 hrs" />
				</div>

				<div className="w-full lg:w-1/2 flex flex-col gap-6 px-6 py-12 sm:px-12 lg:py-16">
					<p className="font-sans text-heading-sm sm:text-heading-lg font-medium text-primary-text">
						book a call
					</p>

					<p className="font-sans text-body text-body-text">
						twenty minutes, free, no brief needed. come with the rough idea and we&apos;ll work
						out the shape of it together.
					</p>

					<a
						href={profile.calendar.intro}
						target="_blank"
						rel="noopener noreferrer"
						className={buttonStyles("secondary", "self-start")}
					>
						book intro call ↗
					</a>

					<DetailRow label="timezone" value={profile.calendar.timezone} />
				</div>
			</div>

			<div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 sm:px-12 py-6 font-mono text-nav">
				<Link href="/work" className={FOOTER_LINK}>
					~/work - see all projects
				</Link>

				<SocialLinks />
			</div>
		</div>
	);
}
