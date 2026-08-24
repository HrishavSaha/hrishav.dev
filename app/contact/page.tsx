import ContactForm from "@/components/ContactForm";
import { profile } from "@/content/profile";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const CONTACT_DETAILS: Array<{ label: string; value: string; href?: string; accent?: boolean }> = [
	{ label: "email", value: profile.socials.email, href: `mailto:${profile.socials.email}`, accent: true },
	{ label: "github", value: stripProtocol(profile.socials.github), href: profile.socials.github },
	{ label: "linkedin", value: stripProtocol(profile.socials.linkedin), href: profile.socials.linkedin },
	{ label: "response", value: "< 24 hrs" },
];

export default function Contact() {
	return (
		<div className="w-full min-h-[calc(100dvh-var(--spacing-nav))] bg-surface flex flex-col lg:flex-row border-b border-hairline">
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
						<div
							key={detail.label}
							className="grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-3 border-b border-hairline-inner font-mono text-metadata"
						>
							<p className="text-label">{detail.label}:</p>
							{detail.href ? (
								<a
									href={detail.href}
									target={detail.href.startsWith("http") ? "_blank" : undefined}
									rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
									className={`break-all ${detail.accent ? "text-accent" : "text-body-text"}`}
								>
									{detail.value}
								</a>
							) : (
								<p className="text-body-text">{detail.value}</p>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="w-full lg:w-1/2 flex flex-col">
				<ContactForm />
			</div>
		</div>
	);
}
