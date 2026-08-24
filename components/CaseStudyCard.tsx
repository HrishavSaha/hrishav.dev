import Image from "next/image";
import Link from "next/link";
import { getSpec, padIndex } from "@/lib/case-study";
import type { CaseStudyEntry, CaseStudyId } from "@/content/case-study-list";

type CaseStudyCardProps = {
	id: CaseStudyId;
	index: number;
	entry: CaseStudyEntry;
};

export default function CaseStudyCard({ id, index, entry }: CaseStudyCardProps) {
	const { metadata, thumbnail, year } = entry;

	return (
		<Link
			href={`/work/${id}`}
			className="group flex flex-col gap-6 px-12 py-8 border-r border-hairline transition-all duration-120 hover:bg-surface-raised"
		>
			<div className="flex items-center justify-between font-mono text-nav">
				<p className="text-label">{padIndex(index)}</p>
				<p className="text-accent">[ ↗ ]</p>
			</div>

			<div className="relative w-full aspect-16/10 border border-hairline-inner overflow-hidden">
				<Image
					src={thumbnail.src}
					alt={thumbnail.alt}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className="object-cover object-top"
				/>
			</div>

			<div className="flex flex-col gap-3">
				<p className="font-sans text-heading-lg font-medium text-primary-text transition-all duration-120 group-hover:text-accent">
					{metadata.title}
				</p>

				<div className="flex gap-6 font-mono text-nav text-label">
					<p>role: <span className="text-body-text">{getSpec(metadata.specs, "role")}</span></p>
					<p>stack: <span className="text-body-text">{getSpec(metadata.specs, "stack")}</span></p>
					<p>{year}</p>
				</div>
			</div>
		</Link>
	);
}
