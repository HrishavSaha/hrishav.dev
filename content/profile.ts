export interface Profile {
	name: string;
	role: string;
	stack: Array<string>;
	based: string;
	status: string;
	availabilityStatus: string;
	isAvailable: boolean;
	socials: {
		email: string;
		github: string;
		linkedin: string;
	};
}

export const profile: Profile = {
	name: "Hrishav Saha",
	role: "designer / developer",
	stack: ['next', 'react native', 'ts'],
	based: "remote",
	status: "open - q3 2026",
	availabilityStatus: "available for work",
	isAvailable: true,
	socials: {
		email: "hrishav.saha@gmail.com",
		github: "https://github.com/HrishavSaha",
		linkedin: "https://linkedin.com/in/hrishavsaha",
	},
}