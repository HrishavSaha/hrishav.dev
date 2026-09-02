import { ReactNode } from "react";
import { padIndex } from "@/lib/case-study";

type SectionBarProps = {
	index: number;
	label: string;
	/** optional right-aligned annotation — a count, a link, a status */
	meta?: ReactNode;
};

/**
 * full-width section rule for the home page: `NN / label` on the left, an
 * optional annotation on the right. narrower than `Section`, which splits the
 * label into its own column alongside the content.
 */
export default function SectionBar({ index, label, meta }: SectionBarProps) {
	return (
		<div className="w-full flex items-center justify-between gap-4 px-6 sm:px-12 py-6 border-b border-hairline font-mono text-nav">
			<p className="text-secondary">{padIndex(index)} / {label}</p>
			{meta ? <p className="text-label shrink-0">{meta}</p> : null}
		</div>
	);
}
