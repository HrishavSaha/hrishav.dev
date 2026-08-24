import { ReactNode } from "react";

type SectionProps = {
	index: number;
	label: string;
	children: ReactNode;
};

export default function Section({ index, label, children }: SectionProps) {
	return (
		<div className="w-full flex flex-col lg:flex-row border-b border-hairline">
			<div className="w-full lg:w-1/4 px-6 pt-10 pb-4 sm:px-12 lg:py-16 lg:border-r border-hairline">
				<p className="font-mono text-nav text-secondary">{index < 10 ? 0 : null}{index} - {label}</p>
			</div>

			<div className="w-full lg:w-3/4 px-6 pb-10 sm:px-12 lg:py-16 flex flex-col gap-6">
				{children}
			</div>
		</div>
	);
}
