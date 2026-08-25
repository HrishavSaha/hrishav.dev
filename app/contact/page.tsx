import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "contact",
	description:
		"tell me what you're building. a couple of sentences is enough to start - i reply to everything within one working day.",
	path: "/contact",
});

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

type Detail = { label: string; value: string; href?: string; accent?: boolean };

const CONTACT_DETAILS: Array<Detail> = [
	{ label: "email", value: profile.socials.email, href: `mailto:${profile.socials.email}`, accent: true },
	{ label: "github", value: stripProtocol(profile.socials.github), href: profile.socials.github },
	{ label: "linkedin", value: stripProtocol(profile.socials.linkedin), href: profile.socials.linkedin },
	{ label: "response", value: "< 24 hrs" },
];

const CALL_DETAILS: Array<Detail> = [
	{ label: "timezone", value: profile.calendar.timezone },
	{ label: "hours", value: profile.calendar.hours },
	{
		label: "calendar",
		value: stripProtocol(profile.calendar.handle),
		href: profile.calendar.handle,
		accent: true,
	},
];

const CALL_TYPES: Array<{
	title: string;
	meta: string;
	description: string;
	cta: string;
	href: string;
	highlighted?: boolean;
}> = [
	{
		title: "intro call",
		meta: "20 min · free",
		description: "is this a fit? scope, timeline, and whether i'm the right person for it.",
		cta: "book intro call",
		href: profile.calendar.intro,
		highlighted: true,
	},
	{
		title: "scoping session",
		meta: "45 min · paid",
		description: "deep dive on an existing product - flows, gaps, and a written follow-up.",
		cta: "book scoping session",
		href: profile.calendar.scoping,
	},
];

function DetailRow({ label, value, href, accent }: Detail) {
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

export default function Contact() {
	return (
		<div className="w-full bg-surface flex flex-col">
			<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] flex flex-col lg:flex-row border-b border-hairline">
				<div className="w-full lg:w-1/2 flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-hairline">
					<p className="font-mono text-nav text-secondary">01 / contact</p>

					<p className="font-sans text-display-xs sm:text-display-sm lg:text-display-md font-medium text-primary-text">
						tell me what you&apos;re
						<br />
						building
					</p>

					<p className="font-sans text-body text-body-text">
						a couple of sentences is enough to start. i reply to everything within one working day.
					</p>

					<div className="flex flex-col">
						{CONTACT_DETAILS.map((detail) => (
							<DetailRow key={detail.label} {...detail} />
						))}
					</div>
				</div>

				<div
					id="brief"
					className="w-full lg:w-1/2 flex flex-col scroll-mt-[var(--spacing-nav)]"
				>
					<ContactForm />
				</div>
			</div>

			<div id="call" className="w-full flex flex-col border-b border-hairline scroll-mt-[var(--spacing-nav)]">
				<div className="w-full flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/2 flex flex-col gap-8 px-6 py-12 sm:px-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-hairline">
						<p className="font-mono text-nav text-secondary">03 / or book a call</p>

						<p className="font-sans text-display-xs sm:text-display-sm lg:text-display-md font-medium text-primary-text">
							talk it through instead
						</p>

						<p className="font-sans text-body text-body-text">
							pick a slot that works for you. no brief needed - come with the rough idea and
							we&apos;ll figure out the shape of it together.
						</p>

						<div className="flex flex-col">
							{CALL_DETAILS.map((detail) => (
								<DetailRow key={detail.label} {...detail} />
							))}
						</div>
					</div>

					<div className="w-full lg:w-1/2 flex flex-col gap-6 px-6 py-12 sm:px-12 lg:py-16">
						<p className="font-mono text-nav text-secondary">select a call type</p>

						<div className="flex flex-col gap-4">
							{CALL_TYPES.map((call) => (
								<div
									key={call.title}
									className={`flex flex-col gap-3 px-6 py-6 sm:px-8 border ${
										call.highlighted ? "border-accent bg-accent/5" : "border-hairline"
									}`}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<p className="font-sans text-heading-sm font-medium text-primary-text">
											{call.title}
										</p>
										<p className={`font-mono text-metadata ${call.highlighted ? "text-accent" : "text-label"}`}>
											{call.meta}
										</p>
									</div>

									<p className="font-sans text-body text-body-text">{call.description}</p>

									<a
										href={call.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`self-start font-mono text-nav transition-all duration-120 ${
											call.highlighted
												? "text-accent hover:underline"
												: "text-secondary hover:text-body-text"
										}`}
									>
										[ {call.cta} ↗ ]
									</a>
								</div>
							))}
						</div>

						<p className="font-mono text-metadata text-label">
							opens {stripProtocol(profile.calendar.handle).split("/")[0]} in a new tab - nothing
							embedded, nothing tracking you here.
						</p>
					</div>
				</div>

				<div className="w-full flex sm:justify-end px-6 py-6 sm:px-12 border-t border-hairline font-mono text-metadata">
					<p className="text-label">
						prefer async?{" "}
						<a href="#brief" className="text-accent hover:underline">
							send a brief instead ↑
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
