"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/authentication";

const DashboardPage = () => {
	const router = useRouter();

	const handleLogout = async () => {
		await logout().then(() => {
			router.push("/");
		});
	};

	return (
		<div className="h-full flex items-center justify-around flex-col">
			<div className="flex items-center justify-around flex-col">
				<h1 className="text-4xl">Bienvenido</h1>
				<Button type="submit" onClick={handleLogout} variant={"default"} className="mt-5 w-auto px-12">
					Logout
				</Button>
			</div>
		</div>
	);
};

export default DashboardPage;
