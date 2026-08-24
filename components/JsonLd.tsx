import { profile } from "@/content/profile";
import { site } from "@/content/site";

/**
 * schema.org graph for the home page: who the site is about, and what the site
 * is. rendered as a script tag rather than metadata, which has no json-ld field.
 */
const graph = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${site.url}/#person`,
			name: profile.name,
			url: site.url,
			jobTitle: profile.role,
			email: `mailto:${profile.socials.email}`,
			description: site.description,
			knowsAbout: [...site.keywords],
			sameAs: [profile.socials.github, profile.socials.linkedin],
		},
		{
			"@type": "WebSite",
			"@id": `${site.url}/#website`,
			url: site.url,
			name: site.name,
			description: site.description,
			inLanguage: "en",
			publisher: { "@id": `${site.url}/#person` },
		},
	],
};

export default function JsonLd() {
	return (
		<script
			type="application/ld+json"
			// the graph is a local constant, never user input
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	);
}
