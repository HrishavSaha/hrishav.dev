import { CaseStudyNav } from "@/types/CaseStudyTypes";
import Button from "./Button";
import Link from "next/link";

type FooterProps = {
	nav: CaseStudyNav;
};

const LINK_STYLES = "text-secondary hover:text-body-text transition-all duration-120";

export default function Footer({ nav }: FooterProps) {
	return (
		<div className="w-full flex flex-col gap-4 px-6 sm:px-12 py-6 font-mono text-nav lg:flex-row lg:items-center lg:justify-between">
			<Button href="/contact" variant="primary" className="order-1 lg:order-2">
				start a project
			</Button>

			{/* below `lg` the two links share a row under the button; at desktop the
			    wrapper dissolves and the order props restore prev · cta · next. */}
			<div className="order-2 flex items-center justify-between gap-4 lg:contents">
				<Link href={nav.prevHref} className={`${LINK_STYLES} lg:order-1`}>
					← <span className="lg:hidden">prev</span>
					<span className="hidden lg:inline">{nav.prevLabel}</span>
				</Link>

				<Link href={nav.nextHref} className={`${LINK_STYLES} lg:order-3`}>
					<span className="lg:hidden">next</span>
					<span className="hidden lg:inline">{nav.nextLabel}</span> →
				</Link>
			</div>
		</div>
	);
}
