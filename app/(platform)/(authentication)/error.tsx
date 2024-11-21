"use client";

import { ROUTES } from "@/constants/appConstants";
import Link from "next/link";

export default function Error() {
	return (
		<div className="max-w-md text-center w-10/12">
			<p>Ocurrio un error, volver a intentarlo nuevamente.</p>
			<p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
				<Link href={ROUTES.home}>Volver al inicio</Link>
			</p>
		</div>
	);
}
