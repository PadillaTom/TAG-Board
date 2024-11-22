import React from "react";
import Link from "next/link";

interface LinkProps {
	children: React.ReactNode;
	url: string;
}

const MyLink = ({ url, children }: LinkProps) => {
	return <Link href={url}>{children}</Link>;
};

export default MyLink;
