import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { CaseStudyList, caseStudyIds } from "@/content/case-study-list";
import { getSpec, padIndex } from "@/lib/case-study";

const ROW_GRID = "grid grid-cols-[64px_1fr_140px_180px_120px_100px] gap-4";

export default function Work() {
	return (
		<div className="w-full min-h-[calc(100vh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="w-full flex items-end justify-between px-12 py-16 border-b border-hairline">
				<div className="flex flex-col gap-8">
					<p className="font-mono text-nav text-secondary">02 / work</p>
					<p className="font-sans text-display-lg font-medium text-primary-text">
						work
					</p>
				</div>

				<p className="font-mono text-nav text-secondary">
					{padIndex(caseStudyIds.length)} project{caseStudyIds.length === 1 ? "" : "s"} · 2026
				</p>
			</div>

			<div className="w-full flex flex-col">
				<div className={`${ROW_GRID} px-12 py-4 border-b border-hairline font-mono text-nav text-label`}>
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
							className={`${ROW_GRID} px-12 py-6 items-center border-b border-hairline-inner font-mono text-nav transition-all duration-120 hover:bg-surface-raised`}
						>
							<p className="text-label">{padIndex(index + 1)}</p>
							<p className="font-bold text-primary-text">{metadata.title}</p>
							<p className="text-body-text">{getSpec(metadata.specs, "role")}</p>
							<p className="text-body-text">{getSpec(metadata.specs, "stack")}</p>
							<p className="text-body-text">{getSpec(metadata.specs, "duration")}</p>
							<p className={metadata.status === "live" ? "text-accent" : "text-label"}>
								{metadata.status}
							</p>
						</Link>
					);
				})}
			</div>

			<div className="mt-auto w-full flex items-center justify-between px-12 py-6 border-t border-hairline font-mono text-nav">
				<p className="text-label">hover a row to open the case study</p>

				<SocialLinks />
			</div>
		</div>
	);
}
