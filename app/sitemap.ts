import type { MetadataRoute } from "next";
import { caseStudyIds } from "@/content/case-study-list";
import { absoluteUrl } from "@/content/site";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	const pages: MetadataRoute.Sitemap = [
		{ url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
		{ url: absoluteUrl("/work"), lastModified, changeFrequency: "monthly", priority: 0.9 },
		{ url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.8 },
		{ url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: 0.7 },
		{ url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.7 },
	];

	const caseStudies: MetadataRoute.Sitemap = caseStudyIds.map((id) => ({
		url: absoluteUrl(`/work/${id}`),
		lastModified,
		changeFrequency: "yearly",
		priority: 0.8,
	}));

	return [...pages, ...caseStudies];
}
