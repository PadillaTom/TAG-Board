"use server";

import { cookies } from "next/headers";
import { JWT_COOKIE_NAME } from "@/constants/appConstants";
import { LOGIN_URL, REGISTER_URL } from "@/constants/apiUrls";
import { LoginRequest, RegisterRequest, AuthenticationResponse, ExceptionResponse } from "@/types/authTypes";
import { handleErrors } from "@/lib/api_utils";

export const login = async (values: LoginRequest) => {
	try {
		const response = await fetch(LOGIN_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		});

		console.log(response);
		if (response.status === 401) {
			return { error: "Usuario o contraseña incorrectos." };
		}

		if (response.status === 202) {
			const cookieStore = await cookies();
			const data: AuthenticationResponse = await response.json();
			cookieStore.set(JWT_COOKIE_NAME, data.jwt, { httpOnly: true });
		}
	} catch (error) {
		return handleErrors(error as Error);
	}
};

export const register = async (values: RegisterRequest) => {
	try {
		const response = await fetch(REGISTER_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		});

		if (response.status === 401) {
			const data: ExceptionResponse = await response.json();
			return { error: data.message };
		}

		if (response.status === 201) {
			const cookieStore = await cookies();
			const data: AuthenticationResponse = await response.json();
			cookieStore.set(JWT_COOKIE_NAME, data.jwt, { httpOnly: true });
		}
	} catch (error) {
		return handleErrors(error as Error);
	}
};

export const logout = async () => {
	const cookieStore = await cookies();
	cookieStore.delete(JWT_COOKIE_NAME);
};