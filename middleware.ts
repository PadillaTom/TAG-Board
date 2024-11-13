import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { JWT_COOKIE_NAME } from "./constants/appConstants";

export function middleware(request: NextRequest) {
	const token = request.cookies.get(JWT_COOKIE_NAME);

	if (!token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
