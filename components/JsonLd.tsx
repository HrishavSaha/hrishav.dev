import { profile } from "@/content/profile";
import { serviceTiers } from "@/content/services";
import { site } from "@/content/site";

/**
 * the services the home page lists, as schema.org offers. prices are "from"
 * figures rather than a fixed rate, so they're published as a
 * `PriceSpecification` with `minPrice` instead of a flat `price`.
 */
const offerCatalog = {
	"@type": "OfferCatalog",
	name: "design and development services",
	itemListElement: serviceTiers.map((tier) => ({
		"@type": "Offer",
		itemOffered: {
			"@type": "Service",
			name: tier.title,
			description: tier.summary,
		},
		priceSpecification: {
			"@type": "PriceSpecification",
			minPrice: Number(tier.price.replace(/[^0-9.]/g, "")),
			priceCurrency: "USD",
		},
	})),
};

/**
 * schema.org graph for the home page: who the site is about, and what the site
 * is. rendered as a script tag rather than metadata, which has no json-ld field.
 *
 * deliberately no `Review` node for the client testimonials — reviews published
 * by the subject of the review aren't eligible for rich results.
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
			hasOfferCatalog: offerCatalog,
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
