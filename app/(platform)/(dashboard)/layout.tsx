import React from "react";
import { Navbar } from "./_components/Navbar";

const DashboardContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh bg-pink-50">
			<Navbar></Navbar>
			<main className="h-full bg-pink-50 pt-14">{children}</main>
		</div>
	);
};

export default DashboardContentLayout;
