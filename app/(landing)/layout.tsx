import React from "react";

const LandingLayout = ({children}: { children: React.ReactNode; }) => {
    return (
        <div className="h-screen bg-slate-100">
            {/* Navbar */}
            <main className="h-full bg-slate-100">
            {children}
            </main>
            {/* Footer */}
        </div>
    )
}

export default LandingLayout;