import { ReactNode } from "react";

type SectionProps = {
	index: number;
	label: string;
	children: ReactNode;
};

export default function Section({ index, label, children }: SectionProps) {
	return (
		<div className="w-full flex border-b border-hairline">
			<div className="w-1/4 px-12 py-16 border-r border-hairline">
				<p className="font-mono text-nav text-secondary">{index < 10 ? 0 : null}{index} - {label}</p>
			</div>

			<div className="w-3/4 px-12 py-16 flex flex-col gap-6">
				{children}
			</div>
		</div>
	);
}
