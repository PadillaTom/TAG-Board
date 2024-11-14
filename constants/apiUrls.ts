// Rest API
export const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

// Authentication
export const LOGIN_URL = BASE_URL + "/auth/login";
export const REGISTER_URL = BASE_URL + "/auth/register";

// Profile
export const GET_PROFILE = BASE_URL + "/profile";
