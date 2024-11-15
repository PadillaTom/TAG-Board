"use server";

import { GET_PROFILE } from "@/constants/apiUrls";
import { handleErrors } from "@/lib/api_utils";
import { authFetch } from "@/lib/interceptor";

export async function fetchProfile() {
	try {
		const response = await authFetch(GET_PROFILE, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (error) {
		return handleErrors(error, "Error");
	}
}
