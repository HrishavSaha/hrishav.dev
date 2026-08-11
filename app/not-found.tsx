"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

const padIndex = (index: number) => `${index < 10 ? "0" : ""}${index}`;

const LINKS = [
	{
		href: "/work",
		label: "~/work",
		description: "see the case studies, sortable by role and stack.",
	},
	{
		href: "/services",
		label: "~/services",
		description: "design, development, or both - pricing and process.",
	},
	{
		href: "/contact",
		label: "~/contact",
		description: "have a project in mind? tell me what you're building.",
	},
] as const;

export default function NotFound() {
	const pathname = usePathname();

	return (
		<div className="w-full min-h-[calc(100vh-var(--spacing-nav))] bg-surface flex flex-col">
			<div className="flex-1 flex flex-col items-center justify-center gap-6 px-12 py-24 border-b border-hairline text-center">
				<p className="font-mono text-nav text-secondary">~{pathname}</p>

				<p className="font-sans text-[6rem] leading-none font-medium text-primary-text">404</p>

				<p className="font-mono text-nav text-secondary">
					command not found: <span className="font-bold text-primary-text">this page doesn&apos;t exist</span>
				</p>
			</div>

			<div className="w-full grid grid-cols-3 divide-x divide-hairline border-b border-hairline">
				{LINKS.map((link, index) => (
					<Link
						key={link.href}
						href={link.href}
						className="flex flex-col gap-4 px-8 py-10 hover:bg-surface-raised transition-all duration-120"
					>
						<div className="flex items-center justify-between font-mono text-metadata text-label">
							<p>{padIndex(index + 1)}</p>
							<p className="text-accent">[ ↗ ]</p>
						</div>

						<p className="font-sans text-heading-sm font-medium text-primary-text">{link.label}</p>
						<p className="font-mono text-metadata text-label">{link.description}</p>
					</Link>
				))}
			</div>

			<div className="flex items-center justify-center py-10">
				<Button href="/">back to home</Button>
			</div>
		</div>
	);
}
