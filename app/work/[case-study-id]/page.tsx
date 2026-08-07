import type { Route } from "next";
import { notFound } from "next/navigation";
import { CaseStudyList } from "@/content/case-study-list";

export default async function CaseStudy(
	props: PageProps<"/work/[case-study-id]">,
) {
	const { "case-study-id": caseStudyId } = await props.params;

	const CaseStudyComponent =
		CaseStudyList[caseStudyId as keyof typeof CaseStudyList];

	if (!CaseStudyComponent) {
		notFound();
	}

	const caseStudyIds = Object.keys(
		CaseStudyList,
	) as Array<keyof typeof CaseStudyList>;
	const currentIndex = caseStudyIds.indexOf(
		caseStudyId as keyof typeof CaseStudyList,
	);
	const prevId =
		caseStudyIds[
			(currentIndex - 1 + caseStudyIds.length) % caseStudyIds.length
		];
	const nextId = caseStudyIds[(currentIndex + 1) % caseStudyIds.length];

	return (
		<div className="w-full min-h-screen bg-surface">
			<CaseStudyComponent
				nav={{
					prevHref: `/work/${prevId}` as Route,
					nextHref: `/work/${nextId}` as Route,
				}}
			/>
		</div>
	);
}
