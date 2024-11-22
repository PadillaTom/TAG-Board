import { Home } from "lucide-react";

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

export const SIDEBAR_ROUTES = [
	{
		title: "Inicio",
		url: "/dashboard",
		icon: Home,
	},
];
