import type { CaseStudyEntry, CaseStudyId } from "@/content/case-study-list";
import { site } from "@/content/site";
import { getSpec } from "@/lib/case-study";

type CaseStudyJsonLdProps = {
	id: CaseStudyId;
	entry: CaseStudyEntry;
};

/**
 * schema.org graph for a single case study page. `CreativeWork` rather than
 * `WebSite` — this node describes the write-up, not the project it documents,
 * which is instead linked as `sameAs` (or omitted for a defunct project with
 * no working url).
 */
export default function CaseStudyJsonLd({ id, entry }: CaseStudyJsonLdProps) {
	const { metadata, thumbnail, year } = entry;
	const path = `/work/${id}`;
	const url = `${site.url}${path}`;

	const graph = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CreativeWork",
				"@id": `${url}#case-study`,
				name: metadata.title,
				description: metadata.summary,
				url,
				image: `${site.url}${thumbnail.src}`,
				dateCreated: year,
				creator: { "@id": `${site.url}/#person` },
				isPartOf: { "@id": `${site.url}/#website` },
				keywords: [
					getSpec(metadata.specs, "role"),
					...getSpec(metadata.specs, "stack").split(" · "),
				].filter(Boolean),
				...(metadata.status !== "archived" && metadata.liveURL
					? { sameAs: [`https://${metadata.liveURL}`] }
					: {}),
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${url}#breadcrumb`,
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "work", item: `${site.url}/work` },
					{ "@type": "ListItem", position: 2, name: metadata.title, item: url },
				],
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			// the graph is derived from local content, never user input
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	);
}
