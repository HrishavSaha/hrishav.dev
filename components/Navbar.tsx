'use client';
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/content/profile"
import LoadingBar from "@/components/loading-bar";

type NavLink<T extends string = string> = {
	path: T;
	label: string;
}

const NAV_LINKS: NavLink<Route>[] = [
	{
		path: '/',
		label: 'home'
	},
	{
		path: '/work',
		label: 'work'
	},
	{
		path: '/about',
		label: 'about'
	},
	{
		path: '/services',
		label: 'services'
	},
	{
		path: '/contact',
		label: 'contact'
	}
]

function isActivePath(pathname: string, path: string) {
	if (path === '/') return pathname === '/';
	return pathname === path || pathname.startsWith(`${path}/`);
}

function Availability() {
	return (
		<div className="flex gap-2 items-center">
			<div className={`w-2 h-2 ${
					profile.isAvailable
					? 'bg-accent'
					: 'bg-label'
				}`} />
			<p className={`font-mono text-nav ${
				profile.isAvailable
				? 'text-body-text'
				: 'text-label'
			}`}
			>
				{profile.availabilityStatus}
			</p>
		</div>
	);
}

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuPath, setMenuPath] = useState(pathname);

	// the panel is an overlay, so a navigation that leaves it open would cover
	// the page it just opened. adjusting during render rather than in an effect
	// closes it before the new route paints, and covers back/forward too.
	if (menuPath !== pathname) {
		setMenuPath(pathname);
		setIsMenuOpen(false);
	}

	return (
		<div className="fixed inset-x-0 top-0 z-50 w-full bg-surface border-b border-hairline">
			<LoadingBar />

			<div className="h-nav w-full flex items-center justify-between px-6 lg:px-12">
				<Link href='/' className="font-mono text-body text-primary-text">hrishav<span className="text-accent">.dev</span></Link>

				<div className="hidden lg:flex gap-6 items-center font-mono text-nav">
					{NAV_LINKS.map((link, index) => {
						const isActive = isActivePath(pathname, link.path);

						return (
						<Link key={index} href={link.path}
							className={`transition-all duration-120 ${
								isActive
								? 'font-bold text-primary-text underline decoration-accent decoration-1 underline-offset-2'
								: 'text-label hover:text-body-text'
							}`}
						>
							~{link.path}
						</Link>
					)})}
				</div>

				<div className="hidden lg:flex">
					<Availability />
				</div>

				<button
					type="button"
					onClick={() => setIsMenuOpen((open) => !open)}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav"
					className="lg:hidden font-mono text-nav text-secondary hover:text-primary-text transition-all duration-120"
				>
					[ {isMenuOpen ? 'close' : 'menu'} ]
				</button>
			</div>

			{isMenuOpen && (
				<div id="mobile-nav" className="lg:hidden flex flex-col border-t border-hairline">
					{NAV_LINKS.map((link) => {
						const isActive = isActivePath(pathname, link.path);

						return (
							<Link
								key={link.path}
								href={link.path}
								className={`px-6 py-4 border-b border-hairline-inner font-mono text-nav transition-all duration-120 ${
									isActive
									? 'font-bold text-primary-text'
									: 'text-label hover:text-body-text'
								}`}
							>
								~{link.path}
							</Link>
						);
					})}

					<div className="px-6 py-4">
						<Availability />
					</div>
				</div>
			)}
		</div>
	)
}
