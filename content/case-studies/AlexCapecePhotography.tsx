import Header from "@/components/Header";
import { type metadata } from "@/types/CaseStudyTypes";

const metadata: metadata = {
	title: 'alex capece photography',
	summary: 'a fast, self-updatable portfolio site for a washington, d.c. documentary photopgraher, built solo, from a client-provided design, in one week.',
	specs: [
		{ label: 'role', value: 'front-end' },
		{ label: 'design', value: 'provided by client' },
		{ label: 'duration', value: '1 week' },
		{ label: 'stack', value: 'next · ts' },
	],
	liveURL: 'alexcapece.com'
}

export default function AlexCapecePhotography({}) {
	return (
		<Header index={1} metadata={metadata} />
	)
}