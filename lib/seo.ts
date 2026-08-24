import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetadataInput = {
	/** bare page title — the root layout's template appends `· hrishav.dev` */
	title: string;
	description: string;
	/** route path, used for the canonical url and og:url */
	path: string;
	/** og/twitter title, when it shouldn't be the page title plus the site name */
	socialTitle?: string;
	/** defaults to the site-wide card at /opengraph-image */
	image?: string;
	type?: "website" | "article";
};

/**
 * builds a page's metadata. `openGraph` and `twitter` replace the root object
 * wholesale rather than merging into it, so every page has to restate the image
 * and the card type — this keeps that in one place.
 */
export function pageMetadata({
	title,
	description,
	path,
	socialTitle = `${title} · ${site.name}`,
	image = "/opengraph-image",
	type = "website",
}: PageMetadataInput): Metadata {

	return {
		title,
		description,
		alternates: { canonical: path },
		openGraph: {
			type,
			siteName: site.name,
			locale: site.locale,
			title: socialTitle,
			description,
			url: path,
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title: socialTitle,
			description,
			images: [image],
		},
	};
}
