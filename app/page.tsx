import Button from "@/components/Button";
import { profile } from "@/content/profile";

export default function Home() {
	return (
		<div className="w-full min-h-screen bg-surface">
			<div className="w-full flex">
				<div className="flex flex-col w-3/4 px-12 py-30 gap-8 border-r border-hairline">
					<p className="font-mono text-nav text-secondary">01 / index</p>

					<p className="font-sans text-display-lg font-medium">
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

				<div className="w-1/4"></div>
			</div>

			<div></div>

			<div></div>
		</div>
	);
}
