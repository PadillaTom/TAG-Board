import React from "react";
import "../paleta.css";

import { Navbar } from "./_components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./_components/DashboardSidebar";

const DashboardContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<SidebarProvider>
				<Navbar></Navbar>
				<DashboardSidebar />
				<span className="pt-16 my-bg-color">
					<SidebarTrigger></SidebarTrigger>
				</span>
				<div className="m-h-dvh pt-28 w-full my-bg-color pr-7 pb-10">{children}</div>
			</SidebarProvider>
		</>
	);
};

export default DashboardContentLayout;
