"use server";

import { cookies } from "next/headers";
import { JWT_COOKIE_NAME } from "@/constants/appConstants";
import { LOGIN_URL, REGISTER_URL } from "@/constants/apiUrls";
import { LoginRequest, RegisterRequest, AuthenticationResponse, ExceptionResponse } from "@/types/authTypes";

export const login = async (values: LoginRequest) => {
	const response = await fetch(LOGIN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(values),
	});

	if (response.status == 401) {
		const data = (await response.json()) as ExceptionResponse;
		return data;
	}

	if (response.status === 202) {
		const cookieStore = await cookies();
		const data = (await response.json()) as AuthenticationResponse;
		cookieStore.set(JWT_COOKIE_NAME, data.jwt, { httpOnly: true });
	}
};

export const register = async (values: RegisterRequest) => {
	const response = await fetch(REGISTER_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(values),
	});

	if (response.status == 401) {
		const data = (await response.json()) as ExceptionResponse;
		return data;
	}

	if (response.status === 201) {
		const cookieStore = await cookies();
		const data: AuthenticationResponse = await response.json();
		cookieStore.set(JWT_COOKIE_NAME, data.jwt, { httpOnly: true });
	}
};

export const logout = async () => {
	const cookieStore = await cookies();
	cookieStore.delete(JWT_COOKIE_NAME);
};
