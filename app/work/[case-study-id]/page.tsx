import type { Route } from "next";
import { notFound } from "next/navigation";
import { CaseStudyList } from "@/content/case-study-list";

const padIndex = (index: number) => `${index < 10 ? "0" : ""}${index}`;

export default async function CaseStudy(
	props: PageProps<"/work/[case-study-id]">,
) {
	const { "case-study-id": caseStudyId } = await props.params;

	const caseStudy = CaseStudyList[caseStudyId as keyof typeof CaseStudyList];

	if (!caseStudy) {
		notFound();
	}

	const caseStudyIds = Object.keys(
		CaseStudyList,
	) as Array<keyof typeof CaseStudyList>;
	const currentIndex = caseStudyIds.indexOf(
		caseStudyId as keyof typeof CaseStudyList,
	);
	const prevIndex =
		(currentIndex - 1 + caseStudyIds.length) % caseStudyIds.length;
	const nextIndex = (currentIndex + 1) % caseStudyIds.length;
	const prevId = caseStudyIds[prevIndex];
	const nextId = caseStudyIds[nextIndex];
	const CaseStudyComponent = caseStudy.component;

	return (
		<div className="w-full min-h-screen bg-surface">
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
