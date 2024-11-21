import React from "react";
import "../../paleta.css";

import { Navbar } from "./_components/Navbar";

const DashboardContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh my-bg-color">
			<Navbar></Navbar>
			<main className="h-full pt-14">{children}</main>
		</div>
	);
};

export default DashboardContentLayout;
