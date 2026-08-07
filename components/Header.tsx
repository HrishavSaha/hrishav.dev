import { metadata } from "@/types/CaseStudyTypes";
import Button from "./Button";

type HeaderProps = {
	index: number;
	metadata: metadata;
}

export default function Header({index, metadata}: HeaderProps) {
	return (
		<div className="w-full flex border-b border-hairline">
			<div className="flex flex-col w-3/4 px-12 py-30 gap-8 border-r border-hairline">
				<p className="font-mono text-nav text-secondary">{index} / case study</p>

				<p className="font-sans text-display-md font-medium text-primary-text">
					{metadata.title}
				</p>

				<p className="font-sans text-body font-medium text-body-text">
					{metadata?.summary}
				</p>

				<div className="flex gap-6">
				<Button href="/work" variant='secondary'>
					← prev project
				</Button>

				<Button href="/contact" variant='secondary'>
					next project →
				</Button>
				</div>
			</div>

			<div className="w-1/4 flex flex-col justify-start p-12 gap-6">
				{metadata.specs.map((spec) => (
					<div key={spec.label} className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">{spec.label}:</p>
						<p className="text-body-text">{spec.value}</p>
					</div>
				))}
				{metadata.liveURL && (
					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">live:</p>
						<a href={`https://${metadata.liveURL}`} target="_blank" rel="noopener noreferrer" className="text-accent">{metadata.liveURL} ↗</a>
					</div>
				)}
			</div>
		</div>
	)
}