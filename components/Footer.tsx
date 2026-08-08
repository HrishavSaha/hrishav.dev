import { CaseStudyNav } from "@/types/CaseStudyTypes";
import Button from "./Button";
import Link from "next/link";

type FooterProps = {
	nav: CaseStudyNav;
};

export default function Footer({ nav }: FooterProps) {
	return (
		<div className="w-full flex items-center justify-between px-12 py-6 font-mono text-nav">
			<Link href={nav.prevHref} className="text-secondary hover:text-body-text transition-all duration-120">
				← {nav.prevLabel}
			</Link>

			<Button href="/contact" variant="primary">
				start a project
			</Button>

			<Link href={nav.nextHref} className="text-secondary hover:text-body-text transition-all duration-120">
				{nav.nextLabel} →
			</Link>
		</div>
	);
}
