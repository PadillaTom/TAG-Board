"use server";

import {cookies} from "next/headers";

const BASE_URL = "http://localhost:8080";
const LOGIN_URL = "/api/v1/auth/login";

export const login = async (values: any) => {
    const response = await fetch(BASE_URL + LOGIN_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: values.username, password: values.password}),
    })
    const cookieStore = await cookies()
    const data = await response.json();

    if (response.status === 202) {
        const token = data.jwt;
        // Store JWT in an HttpOnly cookie
        cookieStore.set("jwt", token, {httpOnly: true});// Access the JWT from the response body
    }

    console.log(data);
}