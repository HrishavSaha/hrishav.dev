import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { CaseStudyList, caseStudyIds, type CaseStudyId } from "@/content/case-study-list";
import { getSpec, padIndex } from "@/lib/case-study";
import { colors, OG_CONTENT_TYPE, OG_SIZE, ogImageOptions } from "@/lib/og";

export const alt = "case study · hrishav.dev";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
	return caseStudyIds.map((id) => ({ "case-study-id": id }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ "case-study-id": string }>;
}) {
	const { "case-study-id": caseStudyId } = await params;

	if (!(caseStudyId in CaseStudyList)) notFound();

	const { metadata, year } = CaseStudyList[caseStudyId as CaseStudyId];
	const index = caseStudyIds.indexOf(caseStudyId as CaseStudyId) + 1;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: colors.surface,
					fontFamily: "JetBrains Mono",
					padding: 64,
				}}
			>
				<div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
					<div style={{ display: "flex", color: colors.primary }}>
						hrishav<span style={{ color: colors.accent }}>.dev</span>
					</div>
					<div style={{ display: "flex", color: colors.label }}>
						{padIndex(index)} / case study
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
					<div
						style={{
							display: "flex",
							fontSize: metadata.title.length > 30 ? 52 : 64,
							fontWeight: 700,
							color: colors.primary,
							lineHeight: 1.15,
						}}
					>
						{metadata.title}
					</div>
					<div style={{ display: "flex", fontSize: 24, color: colors.secondary, lineHeight: 1.5 }}>
						{metadata.summary.length > 160
							? `${metadata.summary.slice(0, 157).trimEnd()}...`
							: metadata.summary}
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ display: "flex", width: "100%", height: 1, background: colors.hairline }} />
					{/* satori has no flex-wrap here, so the row is limited to the two
					    specs that fit on one line alongside the year */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 32,
							paddingTop: 24,
							fontSize: 20,
							color: colors.secondary,
						}}
					>
						{["role", "stack"].map((label) => (
							<div key={label} style={{ display: "flex", gap: 10, whiteSpace: "nowrap" }}>
								<span style={{ color: colors.label }}>{label}:</span>
								{getSpec(metadata.specs, label)}
							</div>
						))}
						<div style={{ display: "flex", marginLeft: "auto", color: colors.accent }}>{year}</div>
					</div>
				</div>
			</div>
		),
		ogImageOptions,
	);
}
