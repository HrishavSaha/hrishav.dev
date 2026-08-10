import Button from "@/components/Button";
import { profile } from "@/content/profile";

export default function Home() {
	return (
		<div className="w-full min-h-[calc(100vh-var(--spacing-nav))] bg-surface">
			<div className="w-full flex border-b border-hairline">
				<div className="flex flex-col w-3/4 px-12 py-30 gap-8 border-r border-hairline">
					<p className="font-mono text-nav text-secondary">01 / index</p>

					<p className="font-sans text-display-lg font-medium text-primary-text">
						i design and build
						<br />
						products end-to-end
						<span className="text-accent animate-cursor-blink">_</span>
					</p>

					<div className="flex gap-6">
					<Button href="/work">
						view work
					</Button>

					<Button href="/contact" variant='secondary'>
						start a project
					</Button>
					</div>
				</div>

				<div className="w-1/4 flex flex-col justify-start p-12 gap-6">
					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">role:</p>
						<p className="text-body-text">{profile.role}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">stack:</p>
						<p className="text-body-text">{profile.stack.join(' · ')}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">based:</p>
						<p className="text-body-text">{profile.based}</p>
					</div>

					<div className="flex py-1 justify-between items-center border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">status:</p>
						<p className="text-accent">{profile.status}</p>
					</div>
				</div>
			</div>

			<div></div>

			<div></div>
		</div>
	);
}
