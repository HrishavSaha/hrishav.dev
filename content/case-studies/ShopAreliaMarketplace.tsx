import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDuoShot from "@/components/ProjectDuoShot";
import Section from "@/components/Section";
import PhotoShot from "@/components/PhotoShot";
import Statistic from "@/components/Statistic";
import Testimonial from "@/components/Testimonial";
import { type metadata as CaseStudyMetadata, type CaseStudyProps } from "@/types/CaseStudyTypes";

const laptop = {
	src: '/images/AreliaShopWithPurposeDesktop.png',
	alt: 'Desktop View'
}

const mobile = {
	src: '/images/AreliaShopWithPurposeMobile.png',
	alt: 'Mobile View'
}

const walkthrough = {
	uploading: {
		src: '/images/AreliaShopWithPurposeSupabase.png',
		alt: 'Walkthrough: supabase image_url column'
	},
}

export const metadata: CaseStudyMetadata = {
	title: 'arelia — shop with purpose',
	summary: 'a marketplace aggregating merch from verified nonprofits, filterable by cause — concepted, designed, and built solo, from idea to launch, in four weeks.',
	specs: [
		{ label: 'role', value: 'design & development' },
		{ label: 'duration', value: '4 weeks' },
		{ label: 'stack', value: 'next · supabase · tailwindcss' },
	],
	status: 'live',
	liveURL: 'shoparelia.org'
}

export default function AreliaShopWithPurpose({ nav }: CaseStudyProps) {
	return (
		<>
		<Header index={1} metadata={metadata} nav={nav} />
		<ProjectDuoShot laptop={laptop} mobile={mobile} laptopWidth="80%" />

		<Section index={1} label="problem">
			<p className="font-sans text-body text-body-text lowercase">
				freddy came to me with an idea, not a product — no existing site, no mvp to iterate on. he'd
				noticed that nonprofit merch tends to be scattered across dozens of separate stores
				(squarespace shops, bonfire campaigns, and everything in between), and that people are often more
				motivated to buy something when it's both genuinely useful to them and tied to a cause they care
				about, rather than a straight donation ask alone. his idea: one marketplace that aggregates merch
				from many different nonprofits and lets shoppers browse and filter by the cause that matters to them.
			</p>
		</Section>

		<Section index={2} label="role & process">
			<p className="font-sans text-body text-body-text lowercase">
				this was a solo project end to end — i owned both the design and the full build, working directly
				with freddy from the initial idea through launch. since arelia was an early-stage venture and
				freddy was intentional about not over-investing in infrastructure before it was actually needed,
				i made a deliberate call: rather than reaching for an off-the-shelf headless cms, i built a
				lightweight, purpose-scoped custom admin system — nothing more than the marketplace actually
				required. i hand-manage the catalog directly as part of an ongoing engagement, which keeps the
				system simple and lets me make sure new nonprofits and products get onboarded cleanly.
			</p>
		</Section>

		<Section index={3} label="solution">
			<p className="font-sans text-body text-body-text lowercase">
				the real technical challenge was giving shoppers one consistent browsing experience across products
				that don't actually live on arelia at all — each nonprofit sells through its own separate platform,
				each with a completely different page structure and image hosting setup. rather than trying to
				normalize or re-host every nonprofit's assets, i pull each product's real image url directly from its
				source page and store it as a column in a postgres products table (via supabase), then feed that
				straight into next/image. every product displays consistently in arelia's grid regardless of where it
				actually lives — and clicking through sends the shopper straight to the nonprofit's own store to complete
				the purchase. arelia never touches the transaction itself, which keeps the system lightweight and
				ensures 100% of the purchase goes directly to the nonprofit.
			</p>
			<PhotoShot images={walkthrough} />
		</Section>

		<Section index={4} label="result">
			<div className="flex flex-wrap gap-8 sm:gap-12">
				<Statistic value="~99" label="lighthouse performance" accent />
				<Statistic value="14" label="nonprofits integrated" />
				<Statistic value="0%" label="platform fee" />
			</div>
			<p className="font-sans text-body text-body-text lowercase">
				arelia launched with 14 verified nonprofits and 100+ products live on day one, aggregated into a single,
				fast browsing experience — pagespeed scores sit in the high 90s site-wide. freddy brought me on for
				ongoing maintenance and catalog management after launch, which has kept this an active, evolving project
				rather than a one-off build.
			</p>
			<Testimonial
				quote="hrishav was a delight to work with - extremely responsive, and was able to walk me through
				the more technical aspects without any issues. he even made a video tutorial to help me manage the
				back-end of things on my own! From first contacting me through my reddit post, to the final delivery
				of my portfolio site, hrishav was a consummate professional and helped me build exactky what i
				wanted. i would absolutely contact him again if i needed to build a different website or upgrade my
				current one."
				author="alex capece"
				source="alexcapece.com"
			/>
		</Section>

		<Section index={5} label="takeaway">
			<p className="font-sans text-body text-body-text lowercase">
				not every early-stage product needs enterprise infrastructure. a custom, purpose-built admin
				system — scoped tightly to what the business actually needed at this stage — got arelia to market
				in four weeks without carrying unnecessary overhead, while leaving room to grow into something
				heavier later if the catalog and traffic ever call for it.
			</p>
		</Section>

		<Footer nav={nav} />
		</>
	)
}