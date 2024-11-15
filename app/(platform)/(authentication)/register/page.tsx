"use client";

import React from "react";
import Link from "next/link";
import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
	return (
		<div className="max-w-md w-full text-center w-10/12">
			<RegisterForm></RegisterForm>
			<p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
				<Link href="/">Volver al inicio</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
