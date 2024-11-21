import React from "react";
import { Sidebar } from "../_components/Sidebar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="pt-14 md:Pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
			<div className="flex gap-x-7">
				<div className="w-64 shrink-0 hidden md:block">
					<Sidebar></Sidebar>
				</div>
				<main className="w-full">{children}</main>
			</div>
		</main>
	);
};

export default DashboardLayout;
