type StatisticProps = {
	value: string;
	label: string;
	accent?: boolean;
};

export default function Statistic({ value, label, accent = false }: StatisticProps) {
	return (
		<div className="flex flex-col gap-2">
			<p className={`font-mono text-heading-lg sm:text-display-sm font-bold ${accent ? "text-accent" : "text-primary-text"}`}>
				{value}
			</p>
			<p className="font-mono text-metadata text-secondary">{label}</p>
		</div>
	);
}
