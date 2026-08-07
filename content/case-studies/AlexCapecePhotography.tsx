import Header from "@/components/Header";
import ProjectDuoShot from "@/components/ProjectDuoShot";
import { type metadata, type CaseStudyProps } from "@/types/CaseStudyTypes";

const laptop = {
	src: '/images/AlexCapecePhotographyDesktop.png',
	alt: 'Desktop View'
}

const mobile = {
	src: '/images/AlexCapecePhotographyMobile.png',
	alt: 'Mobile View'
}

const metadata: metadata = {
	title: 'alex capece photography',
	summary: 'a fast, self-updatable portfolio site for a washington, d.c. documentary photopgrapher, built solo, from a client-provided design, in one week.',
	specs: [
		{ label: 'role', value: 'front-end' },
		{ label: 'design', value: 'provided by client' },
		{ label: 'duration', value: '1 week' },
		{ label: 'stack', value: 'next · ts' },
	],
	liveURL: 'alexcapece.com'
}

export default function AlexCapecePhotography({ nav }: CaseStudyProps) {
	return (
		<>
		<Header index={1} metadata={metadata} nav={nav} />
		<ProjectDuoShot laptop={laptop} mobile={mobile} laptopWidth="80%"  />
		</>
	)
}