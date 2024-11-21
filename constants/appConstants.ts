export const JWT_COOKIE_NAME = "TAG_Board_JWT";

export const ROUTES = {
	// Landing
	home: "/",
	login: "/login",
	register: "/register",

	// Platform
	dashboard: "/dashboard",
	profile: "/dashboard/profile",
};

export const sidebar_items = {
	user: {
		name: "Tomas",
		email: "tom@tag.com",
		avatar: "myurl.com/image",
	},
	teams: [
		{
			name: "Acme Inc.",
			logo: "Logo",
			plan: "Member",
		},
		{
			name: "Acme Inc.",
			logo: "Logo",
			plan: "Member",
		},
		{
			name: "Acme Inc.",
			logo: "Logo",
			plan: "Member",
		},
		{
			name: "Acme Inc.",
			logo: "Logo",
			plan: "Member",
		},
	],
	navMain: [
		{
			title: "Orc Warrior Ground",
			url: "#",
			icon: "SquareTerminal",
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Models",
			url: "#",
			icon: "Bot",
			items: [
				{
					title: "Genesis",
					url: "#",
				},
				{
					title: "Explorer",
					url: "#",
				},
				{
					title: "Quantum",
					url: "#",
				},
			],
		},
		{
			title: "Documentation",
			url: "#",
			icon: "BookOpen",
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
		{
			title: "Settings",
			url: "#",
			icon: "Settings2",
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: "Frame",
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: "PieChart",
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};
