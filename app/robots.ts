import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// the contact form's send endpoint has nothing to index
			disallow: "/api/",
		},
		sitemap: absoluteUrl("/sitemap.xml"),
	};
}
