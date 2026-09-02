import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDuoShot from "@/components/ProjectDuoShot";
import Section from "@/components/Section";
import PhotoShot from "@/components/PhotoShot";
import Statistic from "@/components/Statistic";
import { type metadata as CaseStudyMetadata, type CaseStudyProps } from "@/types/CaseStudyTypes";

const laptop = {
	src: '/images/FernAndFlourDesktop.png',
	alt: 'Desktop View'
}

const mobile = {
	src: '/images/FernAndFlourMobile.png',
	alt: 'Mobile View'
}

export const metadata: CaseStudyMetadata = {
	title: 'fern & flour — breakfast among the plants',
	summary: 'a self-directed landing page for a fictional fort greene café — built as a concrete, ready-to-show example for cold outreach into the café and restaurant space.',
	specs: [
		{ label: 'role', value: 'design & development' },
		{ label: 'design', value: 'original concept' },
		{ label: 'duration', value: '3 days' },
		{ label: 'stack', value: 'next · framer motion' },
	],
	status: 'live',
	liveURL: 'fernandflour.hrishav.dev'
}

export default function FernAndFlourCafe({ nav }: CaseStudyProps) {
	return (
		<>
		<Header index={1} metadata={metadata} nav={nav} />
		<ProjectDuoShot laptop={laptop} mobile={mobile} laptopWidth="80%" />

		<Section index={1} label="problem">
			<p className="font-sans text-body text-body-text lowercase">
				cold-calling cafés and restaurants with "i'll build you a landing page" is a hard sell in the
				abstract — a prospective owner can't picture a bespoke site from a pitch alone, and a generic
				mockup or stock template doesn't prove design range for a space with real character. i wanted a
				concrete, fully-built example specifically in the food and hospitality niche — something a friend
				doing outreach on my behalf could point to directly and say "this is what he'd build for you,"
				rather than asking someone to take a pitch on faith.
			</p>
		</Section>

		<Section index={2} label="role & process">
			<p className="font-sans text-body text-body-text lowercase">
				design and development both mine, entirely self-directed — no brief, no client, just a concept built
				from scratch. i invented fern & flour with enough specificity to feel like a real business rather than
				a generic demo: a real neighborhood, a menu with actual prices and a distinct voice, small founding
				details that make it feel lived-in rather than templated. that specificity was deliberate — a landing
				page that reads as generic doesn't prove anything to a prospective café owner; one with a believable
				point of view does. built in 3 days, moving fast since this was a self-funded example rather than
				billable work.
			</p>
		</Section>

		<Section index={3} label="solution">
			<p className="font-sans text-body text-body-text lowercase">
				the real challenge was making the whole site feel bespoke to this exact café's character, rather than
				"coffee shop template with plants added." every choice — the serif display type (fraunces, paired with
				inter), a warm editorial palette, hand-drawn svg illustrations — was made to match a specific voice, not
				a generic aesthetic. it's also a deliberate departure from the mono/technical system running through the
				rest of my portfolio, proving range for a completely different kind of client than the dev-tool sensibility
				my other case studies lean into. on the interaction side, framer motion drives scroll-triggered reveals
				through the page and a horizontal drag/swipe menu carousel; menu content is hardcoded directly rather
				than pulled from a cms, since a fixed demo doesn't need the editability a live client project would.
			</p>
		</Section>

		<Section index={4} label="result">
			<div className="flex flex-wrap gap-8 sm:gap-12">
				<Statistic value="~92" label="lighthouse performance" accent />
				<Statistic value="3" label="days, concept to finished" />
			</div>
			<p className="font-sans text-body text-body-text lowercase">
				there's no live traffic or client feedback to report here — this isn't a real business. the actual outcome
				is having a concrete, finished asset ready for outreach instead of an abstract pitch: a specific, polished
				example a friend in café/restaurant management can point a prospective client toward directly, in exactly
				the niche being targeted.
			</p>
		</Section>

		<Section index={5} label="takeaway">
			<p className="font-sans text-body text-body-text lowercase">
				sometimes the most convincing pitch isn't a pitch at all — it's a finished example specific enough that
				someone can just look at it and know what they'd get.
			</p>
		</Section>

		<Footer nav={nav} />
		</>
	)
}