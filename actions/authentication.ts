"use server";

import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8080";
const LOGIN_URL = "/api/v1/auth/login";
const REGISTER_URL = "/api/v1/auth/register";

export const login = async (values: { username: string; password: string }) => {
	const response = await fetch(BASE_URL + LOGIN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: values.username, password: values.password }),
	});

	const cookieStore = await cookies();
	const data = await response.json();

	if (response.status === 401) {
		return { error: "Usuario o contraseña incorrectos." };
	}

	if (response.status === 202) {
		const token = data.jwt;
		cookieStore.set("jwt", token, { httpOnly: true });
	}
};

export const register = async (values: { username: string; password: string }) => {
	const response = await fetch(BASE_URL + REGISTER_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: values.username, password: values.password, roleId: 2 }),
	});

	const cookieStore = await cookies();
	const data = await response.json();

	if (response.status === 400) {
		return { error: data.message };
	}

	if (response.status === 201) {
		const token = data.jwt;
		cookieStore.set("jwt", token, { httpOnly: true });
	}
};