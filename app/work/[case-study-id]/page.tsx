import type { Metadata, Route } from "next";
import { notFound } from "next/navigation";
import { CaseStudyList, caseStudyIds, type CaseStudyId } from "@/content/case-study-list";
import { getSpec, padIndex } from "@/lib/case-study";
import { pageMetadata } from "@/lib/seo";

const isCaseStudyId = (id: string): id is CaseStudyId => id in CaseStudyList;

// prerender every case study at build time instead of rendering on demand
export function generateStaticParams() {
	return caseStudyIds.map((id) => ({ "case-study-id": id }));
}

export async function generateMetadata(
	props: PageProps<"/work/[case-study-id]">,
): Promise<Metadata> {
	const { "case-study-id": caseStudyId } = await props.params;

	if (!isCaseStudyId(caseStudyId)) return {};

	const { metadata } = CaseStudyList[caseStudyId];
	const path = `/work/${caseStudyId}`;

	return {
		...pageMetadata({
			title: metadata.title,
			description: metadata.summary,
			path,
			// this segment generates its own card, per case study
			image: `${path}/opengraph-image`,
			type: "article",
		}),
		keywords: [
			getSpec(metadata.specs, "role"),
			...getSpec(metadata.specs, "stack").split(" · "),
			"case study",
		].filter(Boolean),
	};
}

export default async function CaseStudy(
	props: PageProps<"/work/[case-study-id]">,
) {
	const { "case-study-id": caseStudyId } = await props.params;

	if (!isCaseStudyId(caseStudyId)) {
		notFound();
	}

	const caseStudy = CaseStudyList[caseStudyId];
	const currentIndex = caseStudyIds.indexOf(caseStudyId);
	const prevIndex =
		(currentIndex - 1 + caseStudyIds.length) % caseStudyIds.length;
	const nextIndex = (currentIndex + 1) % caseStudyIds.length;
	const prevId = caseStudyIds[prevIndex];
	const nextId = caseStudyIds[nextIndex];
	const CaseStudyComponent = caseStudy.component;

	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface">
			<CaseStudyComponent
				nav={{
					prevHref: `/work/${prevId}` as Route,
					prevLabel: `${padIndex(prevIndex + 1)} ${CaseStudyList[prevId].metadata.title}`,
					nextHref: `/work/${nextId}` as Route,
					nextLabel: `${padIndex(nextIndex + 1)} ${CaseStudyList[nextId].metadata.title}`,
				}}
			/>
		</div>
	);
}
