import { profile } from "./profile";

/**
 * canonical origin for metadata, sitemap and og image urls. override per
 * environment (preview deploys, staging) with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hrishav.dev").replace(/\/$/, "");

export const site = {
	url: siteUrl,
	name: "hrishav.dev",
	/** used as the home page title and as the og:site_name */
	title: `${profile.name} - designer & developer`,
	tagline: "i design and build products end-to-end",
	description:
		"designer and developer building products end-to-end - interface design through to shipped, production front-end. next.js, react native and typescript, for small teams and independent clients.",
	locale: "en_US",
	keywords: [
		"designer developer",
		"product designer",
		"front-end developer",
		"next.js developer",
		"react native developer",
		"typescript",
		"design and development",
		"freelance web developer",
		profile.name,
	],
} as const;

/** absolute url for a route, for canonicals and the sitemap */
export const absoluteUrl = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;
