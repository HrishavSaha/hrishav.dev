export type Detail = {
	label: string;
	value: string;
	href?: string;
	accent?: boolean;
};

/**
 * a `label: value` row on a hairline, where the value is optionally a link.
 * an `http` href is treated as external and opens in a new tab; anything else
 * (`mailto:`, an in-page anchor) stays in place.
 */
export default function DetailRow({ label, value, href, accent }: Detail) {
	const isExternal = Boolean(href?.startsWith("http"));

	return (
		<div className="grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-3 border-b border-hairline-inner font-mono text-metadata">
			<p className="text-label">{label}:</p>
			{href ? (
				<a
					href={href}
					target={isExternal ? "_blank" : undefined}
					rel={isExternal ? "noopener noreferrer" : undefined}
					className={`break-all ${accent ? "text-accent" : "text-body-text"}`}
				>
					{value}
				</a>
			) : (
				<p className="text-body-text">{value}</p>
			)}
		</div>
	);
}
