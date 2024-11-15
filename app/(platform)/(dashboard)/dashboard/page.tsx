"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/authentication";

import Link from "next/link";

const DashboardPage = () => {
	const router = useRouter();

	const handleLogout = async () => {
		await logout().then(() => {
			router.push("/");
		});
	};

	return (
		<div className="h-full flex items-center justify-around flex-col">
			<div className="flex flex-col h-48 justify-between items-center">
				<h2 className="text-1xl">Bienvenido</h2>
				<Button variant="outline" className="text-3xl">
					<Link href="/dashboard/profile">Mi Perfil!</Link>
				</Button>
				<Button variant="link" onClick={handleLogout}>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default DashboardPage;
