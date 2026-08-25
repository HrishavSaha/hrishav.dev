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
	calendar: {
		handle: string;
		timezone: string;
		hours: string;
		intro: string;
		scoping: string;
	};
}

export const profile: Profile = {
	name: "Hrishav Saha",
	role: "designer / developer",
	stack: ['next', 'react native', 'ts'],
	based: "remote",
	status: "open",
	availabilityStatus: "available for work",
	isAvailable: true,
	socials: {
		email: "hrishav.saha@gmail.com",
		github: "https://github.com/HrishavSaha",
		linkedin: "https://linkedin.com/in/hrishavsaha",
	},
	calendar: {
		handle: "https://cal.com/hrishavsaha",
		timezone: "IST (UTC+5:30)",
		hours: "everyday · 12:00-02:00",
		intro: "https://cal.com/hrishavsaha/intro-call",
		scoping: "https://cal.com/hrishavsaha/scoping-session",
	},
}