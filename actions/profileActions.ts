"use server";

import { GET_PROFILE } from "@/constants/apiUrls";
import { authFetch } from "@/lib/interceptor";

export async function fetchProfile() {
	const response = await authFetch(GET_PROFILE, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await response.json();
}
