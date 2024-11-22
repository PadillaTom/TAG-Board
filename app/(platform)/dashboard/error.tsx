"use client";

import MyLink from "@/components/MyLink";
import { ROUTES } from "@/constants/appConstants";

export default function Error() {
	return (
		<div className="h-full flex justify-center flex-col items-center">
			<div className="max-w-md text-center w-10/12">
				<p>Ocurrio un error, volver a intentarlo nuevamente.</p>
				<p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
					<MyLink url={ROUTES.home}>Volver al inicio</MyLink>
				</p>
			</div>
		</div>
	);
}
