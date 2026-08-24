import { metadata, CaseStudyNav } from "@/types/CaseStudyTypes";
import Button from "./Button";

type HeaderProps = {
	index: number;
	metadata: metadata;
	nav: CaseStudyNav;
}

export default function Header({index, metadata, nav}: HeaderProps) {
	return (
		<div className="w-full flex flex-col lg:flex-row border-b border-hairline">
			<div className="flex flex-col w-full lg:w-2/3 xl:w-3/4 px-6 py-12 sm:px-12 sm:py-20 lg:py-30 gap-8 border-b lg:border-b-0 lg:border-r border-hairline">
				<p className="font-mono text-nav text-secondary">{index < 10 ? 0 : null}{index} / case study</p>

				<p className="font-sans text-display-xs sm:text-display-sm lg:text-display-md font-medium text-primary-text">
					{metadata.title}
				</p>

				<p className="w-full xl:w-3/4 font-sans text-body font-medium text-body-text">
					{metadata?.summary}
				</p>

				<div className="flex flex-wrap gap-4 sm:gap-6">
				<Button href={nav.prevHref} variant='secondary'>
					← prev project
				</Button>

				<Button href={nav.nextHref} variant='secondary'>
					next project →
				</Button>
				</div>
			</div>

			<div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col justify-start px-6 py-10 sm:p-12 lg:p-8 xl:p-12 gap-6">
				{metadata.specs.map((spec) => (
					<div key={spec.label} className="flex py-1 gap-4 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label shrink-0">{spec.label}:</p>
						<p className="text-body-text text-right">{spec.value}</p>
					</div>
				))}
				{metadata.liveURL && (
					<div className="flex py-1 gap-4 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label shrink-0">live:</p>
						<a href={`https://${metadata.liveURL}`} target="_blank" rel="noopener noreferrer" className="text-accent text-right break-all">{metadata.liveURL} ↗</a>
					</div>
				)}
			</div>
		</div>
	)
}