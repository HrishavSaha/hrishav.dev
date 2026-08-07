export type metadata = {
	title: string;
	summary: string;
	specs: Array<spec>;
	liveURL?: string;
}

export type spec = {
	label: string;
	value: string;
}