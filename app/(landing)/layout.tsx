import React from "react";

const LandingLayout = ({children}: { children: React.ReactNode; }) => {
    return (
        <div className="h-dvh bg-pink-50">
            {/* Navbar */}
            <main className="h-full bg-pink-50">
            {children}
            </main>
            {/* Footer */}
        </div>
    )
}

export default LandingLayout;