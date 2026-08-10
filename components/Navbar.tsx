'use client';
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div className="fixed inset-x-0 top-0 z-50 h-nav w-full flex items-center justify-between px-12 bg-surface border-b border-hairline">
			<LoadingBar />

			<Link href='/' className="font-mono text-body text-primary-text">hrishav<span className="text-accent">.dev</span></Link>

			<div className="flex gap-6 items-center font-mono text-nav">
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
		</div>
	)
}