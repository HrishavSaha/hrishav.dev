import type { Metadata } from "next";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { CaseStudyList, caseStudyIds } from "@/content/case-study-list";
import { getSpec, padIndex } from "@/lib/case-study";
import { pageMetadata } from "@/lib/seo";

const DESCRIPTION = `selected work - ${caseStudyIds
	.map((id) => CaseStudyList[id].metadata.title)
	.join(", ")}. case studies covering the problem, my role, the build and the result.`;

export const metadata: Metadata = pageMetadata({
	title: "work",
	description: DESCRIPTION,
	path: "/work",
});

const ROW_GRID = "lg:grid lg:grid-cols-[64px_1fr_140px_180px_120px_100px] lg:gap-4";

// the specs shown per row, with the table column each one occupies at desktop
const SPEC_COLUMNS = [
	{ label: "role", column: "lg:col-start-3" },
	{ label: "stack", column: "lg:col-start-4" },
	{ label: "duration", column: "lg:col-start-5" },
];

export default function Work() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 px-6 sm:px-12 py-12 lg:py-16 border-b border-hairline">
				<div className="flex flex-col gap-6 lg:gap-8">
					<p className="font-mono text-nav text-secondary">02 / work</p>
					<p className="font-sans text-display-sm lg:text-display-lg font-medium text-primary-text">
						work
					</p>
				</div>

				<p className="font-mono text-nav text-secondary">
					{padIndex(caseStudyIds.length)} project{caseStudyIds.length === 1 ? "" : "s"} · 2026
				</p>
			</div>

			<div className="w-full flex flex-col">
				<div className={`${ROW_GRID} hidden px-12 py-4 border-b border-hairline font-mono text-nav text-label`}>
					<p>idx</p>
					<p>project</p>
					<p>role</p>
					<p>stack</p>
					<p>duration</p>
					<p>status</p>
				</div>

				{caseStudyIds.map((id, index) => {
					const { metadata } = CaseStudyList[id];

					return (
						<Link
							key={id}
							href={`/work/${id}`}
							className={`${ROW_GRID} flex flex-col gap-1 px-6 py-5 sm:px-12 lg:py-6 lg:items-center border-b border-hairline-inner font-mono text-nav transition-all duration-120 hover:bg-surface-raised`}
						>
							{/* mobile stacks the row: idx and status on one line, then the
							    title, then a labelled spec per line. `lg:contents` dissolves
							    the header wrapper at desktop and the explicit row/column
							    starts put every field back in its table column, so the
							    stacking order here is free to differ from the table's. */}
							<div className="flex items-center justify-between gap-4 lg:contents">
								<p className="text-label lg:row-start-1 lg:col-start-1">{padIndex(index + 1)}</p>
								<p
									className={`lg:row-start-1 lg:col-start-6 ${
										metadata.status === "live" ? "text-accent" : "text-label"
									}`}
								>
									{metadata.status}
								</p>
							</div>

							<p className="mt-1 mb-2 text-body font-bold text-primary-text lg:row-start-1 lg:col-start-2 lg:m-0 lg:text-nav">
								{metadata.title}
							</p>

							{SPEC_COLUMNS.map(({ label, column }) => (
								<p key={label} className={`text-body-text lg:row-start-1 ${column}`}>
									<span className="text-label lg:hidden">{label}: </span>
									{getSpec(metadata.specs, label)}
								</p>
							))}
						</Link>
					);
				})}
			</div>

			<div className="mt-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 sm:px-12 py-6 border-t border-hairline font-mono text-nav">
				<p className="hidden lg:block text-label">hover a row to open the case study</p>
				<p className="lg:hidden text-label">tap a row to open the case study</p>

				<SocialLinks />
			</div>
		</div>
	);
}
