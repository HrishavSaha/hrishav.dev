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

	return (
		<div className="w-full min-h-screen bg-surface">
			<CaseStudyComponent />
		</div>
	);
}
