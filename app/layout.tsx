import type {Metadata} from "next";
import "./globals.css";
import {siteConfig} from "@/config/site";
import React from "react";

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    icons: [{
        url: "/favicon.ico",
        href: "/favicon.ico"
    }]
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
