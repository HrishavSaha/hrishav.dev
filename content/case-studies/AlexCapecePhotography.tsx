import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDuoShot from "@/components/ProjectDuoShot";
import Section from "@/components/Section";
import PhotoShot from "@/components/PhotoShot";
import Statistic from "@/components/Statistic";
import Testimonial from "@/components/Testimonial";
import { type metadata as CaseStudyMetadata, type CaseStudyProps } from "@/types/CaseStudyTypes";

const laptop = {
	src: '/images/AlexCapecePhotographyDesktop.png',
	alt: 'Desktop View'
}

const mobile = {
	src: '/images/AlexCapecePhotographyMobile.png',
	alt: 'Mobile View'
}

const walkthrough = {
	uploading: {
		src: '/images/AlexCapecePhotographyGithub.png',
		alt: 'Walkthrough: adding an image'
	},
}

export const metadata: CaseStudyMetadata = {
	title: 'alex capece photography',
	summary: 'a fast, self-updatable portfolio site for a washington, d.c. documentary photopgrapher, built solo, from a client-provided design, in one week.',
	specs: [
		{ label: 'role', value: 'front-end' },
		{ label: 'design', value: 'provided by client' },
		{ label: 'duration', value: '1 week' },
		{ label: 'stack', value: 'next · ts' },
	],
	status: 'live',
	liveURL: 'alexcapece.com'
}

export default function AlexCapecePhotography({ nav }: CaseStudyProps) {
	return (
		<>
		<Header index={1} metadata={metadata} nav={nav} />
		<ProjectDuoShot laptop={laptop} mobile={mobile} laptopWidth="80%" />

		<Section index={1} label="problem">
			<p className="font-sans text-body text-body-text">
				alex came to me with no existing site and a clear visual direction already in mind: a full-bleed,
				single-column scroll of documentary images with editorial captions underneath, minimal navigation,
				nothing to distract from the photography itself. my job was to take that vision and turn it into
				a real, fast, maintainable site, while also catching the places where his initial spec needed a
				second opinion on structure to actually hold up as a working website.
			</p>
		</Section>

		<Section index={2} label="role & process">
			<p className="font-sans text-body text-body-text">
				i handled the build end-to-end: front-end development, converting his source images from png to
				webp, buying and configuring the domain, and deployment. alex was decisive about the visual
				direction, so most of my input was structural - where his design needed adjustment to translate
				cleanly into a responsive, performant layout, i flagged it and we worked through it together. he
				stayed firm on the core vision, which was the right call; my job was to make sure the site
				underneath was solid.
			</p>
		</Section>

		<Section index={3} label="solution">
			<p className="font-sans text-body text-body-text">
				because this was a lightweight portfolio rather than a content-heavy site, i made a deliberate
				call: skip a cms and backend entirely. adding that infrastructure would have meant more moving
				parts, slower load times, and ongoing maintenance for a site that just needed to be fast and
				simple.
			</p>
			<p className="font-sans text-body text-body-text">
				instead, i built a plain-folder-and-data-file-system. alex adds an image to a folder and updates a
				simple images.ts file to control what shows, in what order. to make that accessible to a non-developer,
				i recorded a set of walkthrough videos showing him exactly how to add, remove, reorder, and update
				images himself, with zero ongoing dependency on me.
			</p>
			<PhotoShot images={walkthrough} />
		</Section>

		<Section index={4} label="result">
			<div className="flex gap-12">
				<Statistic value="~95" label="lighthouse performance" accent />
				<Statistic value="1 wk" label="spec to launch" />
				<Statistic value="0" label="backed dependencies" />
			</div>
			<p className="font-sans text-body text-body-text">
				the site loads a large, image-heavy portfolio without any perceptible lag, and gives alex full
				control to update his work without touching a line of code. it&apos;s live and serving as his
				primary portfolio for assignments and inquiries.
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
			<p className="font-sans text-body text-body-text">
				not every project needs a cms. sometimes the right technical decision is the one that adds the
				least - a plain-file content system and a short set of tutorial videos gave alex full independence
				without adding a single point of backend failure.
			</p>
		</Section>

		<Footer nav={nav} />
		</>
	)
}