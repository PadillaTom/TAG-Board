import { JWT_COOKIE_NAME } from "@/constants/appConstants";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
	const jwt = document.cookie
		.split("; ")
		.find((row) => row.startsWith(`${JWT_COOKIE_NAME}=`))
		?.split("=")[1];

	if (jwt) {
		options.headers = {
			...options.headers,
			Authorization: `Bearer ${jwt}`,
		};
	}

	return fetch(url, options);
}
