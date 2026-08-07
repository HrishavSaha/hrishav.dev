'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile"

const NAV_LINKS = [
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

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div className="w-full flex items-center justify-between px-12 py-6 bg-surface border-b border-hairline">

			<Link href='/' className="font-mono text-body text-primary-text">hrishav<span className="text-label">.dev</span></Link>

			<div className="flex gap-6 items-center font-mono text-nav">
				{NAV_LINKS.map((link, index) => {
					const isActive = pathname === link.path;

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
				<div className="w-2 h-2 bg-accent" />
				<p className="font-mono text-nav text-body-text">{profile.availabilityStatus}</p>
			</div>
		</div>
	)
}