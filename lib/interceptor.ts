import { JWT_COOKIE_NAME } from "@/constants/appConstants";
import { cookies } from "next/headers";

export async function authFetch(url: string, options: RequestInit = {}) {
	// Retrieve the JWT from cookies
	const cookieStore = await cookies();
	const token = cookieStore.get(JWT_COOKIE_NAME);

	// Set the Authorization header if the JWT exists
	const headers = new Headers(options.headers);
	if (token) {
		headers.set("Authorization", `Bearer ${token.value}`);
	}

	// Merge headers and any other options with the original fetch options
	const fetchOptions: RequestInit = {
		...options,
		headers,
	};

	return fetch(url, fetchOptions);
}
