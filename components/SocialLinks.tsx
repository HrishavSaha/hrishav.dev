import { profile } from "@/content/profile";

const LINK_STYLES = "text-secondary hover:text-body-text transition-all duration-120";

export default function SocialLinks() {
	return (
		<div className="flex gap-6 font-mono text-nav">
			<a href={`mailto:${profile.socials.email}`} className={LINK_STYLES}>
				email
			</a>
			<a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={LINK_STYLES}>
				github
			</a>
			<a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={LINK_STYLES}>
				linkedin
			</a>
		</div>
	);
}
