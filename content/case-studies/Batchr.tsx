import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDuoShot from "@/components/ProjectDuoShot";
import Section from "@/components/Section";
import Statistic from "@/components/Statistic";
import { type metadata as CaseStudyMetadata, type CaseStudyProps } from "@/types/CaseStudyTypes";

const laptop = {
	src: '/images/BatchrDesktop.png',
	alt: 'Desktop View'
}

const mobile = {
	src: '/images/BatchrMobile.png',
	alt: 'Mobile View'
}

export const metadata: CaseStudyMetadata = {
	title: 'batchr. — soft layers, bold flavor',
	summary: 'a self-directed brand and landing page for an indulgent brownies-and-cookies e-commerce concept, expanded solo from an early wireframe into a complete design system and build.',
	specs: [
		{ label: 'role', value: 'design & development (self-directed)' },
		{ label: 'design', value: 'original system, expanded from an early wireframe' },
		{ label: 'duration', value: '1 week' },
		{ label: 'stack', value: 'next · static, no cms' },
	],
	status: 'concept',
	liveURL: 'batchr.hrishav.dev'
}

export default function Batchr({ nav }: CaseStudyProps) {
	return (
		<>
		<Header index={1} metadata={metadata} nav={nav} />
		<ProjectDuoShot laptop={laptop} mobile={mobile} metadata={metadata} laptopWidth="80%" />

		<Section index={1} label="problem">
			<p className="font-sans text-body text-body-text lowercase">
				this project started as an early client engagement — a rough wireframe for a brownies-and-cookies
				e-commerce brand — that didn&apos;t move forward before the work was finished. rather than leave it
				half-built, i picked it up independently: took the original starting point and developed it into a
				complete, presentable brand and site under a new name, for use in my own portfolio.
			</p>
		</Section>

		<Section index={2} label="role & process">
			<p className="font-sans text-body text-body-text lowercase">
				solo project, design through development. the original wireframe gave me a rough starting shape — a
				handful of base colors and a basic layout — but everything from there was mine: the full design
				system, typography, photography direction (curated from stock imagery), copy, layout, and the entire
				build. since this was never going to launch as a real storefront, i focused entirely on making the
				front-end presentation as polished and complete as possible, rather than on backend or commerce
				infrastructure.
			</p>
		</Section>

		<Section index={3} label="solution">
			<p className="font-sans text-body text-body-text lowercase">
				batchr. is a static next.js landing page — no cms, no backend, everything hardcoded directly, since
				the goal was a portfolio-quality front-end rather than a functioning store. the design leans fully
				into an indulgent, tactile dessert-brand aesthetic: a warm palette, photography-led product
				presentation, and confident, playful copy. it&apos;s a deliberate departure from both the
				technical/monochrome system running through the rest of my portfolio and the editorial café language
				of fern & flour — between the three, it&apos;s meant to show a genuinely different register: consumer
				e-commerce and cpg branding, rather than tech or hospitality.
			</p>
		</Section>

		<Section index={4} label="result">
			<div className="flex flex-wrap gap-8 sm:gap-12">
				<Statistic value="92" label="pagespeed — mobile" accent />
				<Statistic value="100" label="pagespeed — desktop" />
				<Statistic value="1 wk" label="wireframe to launch" />
			</div>
			<p className="font-sans text-body text-body-text lowercase">
				built in one week, entirely solo, with no major technical obstacles — the priority here was speed
				and polish rather than solving a hard problem. the result is a complete, ready-to-show example of
				consumer e-commerce branding, rounding out the portfolio with a third distinct visual register
				alongside the technical system and the café concept.
			</p>
		</Section>

		<Section index={5} label="takeaway">
			<p className="font-sans text-body text-body-text lowercase">
				not every case study needs to solve a hard technical problem to earn its place. sometimes the value
				is in range — the same underlying skill set (design-system thinking plus a solo, full end-to-end
				build) applied to a completely different visual and emotional register than the rest of the work on
				display.
			</p>
		</Section>

		<Footer nav={nav} />
		</>
	)
}
