import React from "react";
import { Navbar } from "@/app/(landing)/_components/Navbar";
import { Footer } from "@/app/(landing)/_components/Footer";

import "../paleta.css";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-dvh my-bg-color">
			<Navbar></Navbar>
			<main className="h-full my-bg-color">{children}</main>
			<Footer></Footer>
		</div>
	);
};

export default LandingLayout;
