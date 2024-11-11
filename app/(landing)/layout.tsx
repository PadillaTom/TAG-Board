import React from "react";
import {Navbar} from "@/app/(landing)/_components/Navbar";
import {Footer} from "@/app/(landing)/_components/Footer";

const LandingLayout = ({children}: { children: React.ReactNode; }) => {
    return (
        <div className="h-dvh bg-pink-50">
            <Navbar></Navbar>
            <main className="h-full bg-pink-50">
            {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default LandingLayout;