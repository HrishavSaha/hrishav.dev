import { profile } from "./profile";

/**
 * canonical origin for metadata, sitemap and og image urls.
 *
 * social scrapers fetch og:image as an absolute url, so this has to be a host
 * that actually serves the site — a hardcoded domain that isn't live yet means
 * no preview image anywhere. resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override, set this once the real domain is live
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the project's production domain, which
 *      vercel updates to the custom domain automatically once one is attached
 *   3. VERCEL_URL — this specific deployment, for previews before a production alias
 *   4. localhost, for `next dev` / `next start`
 */
function resolveSiteUrl() {
	const explicit = process.env.NEXT_PUBLIC_SITE_URL;
	if (explicit) return explicit;

	const vercelHost =
		process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
	if (vercelHost) return `https://${vercelHost}`;

	return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

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
