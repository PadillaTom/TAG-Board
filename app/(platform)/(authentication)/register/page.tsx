"use client";

import React from "react";
import Link from "next/link";
import RegisterForm from "../_components/RegisterForm";
import { ROUTES } from "@/constants/appConstants";

const RegisterPage = () => {
	return (
		<div className="max-w-md text-center w-10/12">
			<RegisterForm></RegisterForm>
			<p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
				<Link href={ROUTES.home}>Volver al inicio</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
