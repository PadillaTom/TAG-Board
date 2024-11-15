"use client";

import React from "react";
import Link from "next/link";
import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
	return (
		<div className="max-w-md w-full text-center w-10/12">
			<LoginForm></LoginForm>
			<p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
				<Link href="/">Volver al inicio</Link>
			</p>
		</div>
	);
};

export default LoginPage;
