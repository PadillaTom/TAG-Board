"use client";

interface NavItemProps {
	isExpanded: boolean;
	isActive: boolean;
	onExpand: (id: string) => void;
}

export const NavItem = ({ isExpanded, isActive, onExpand }: NavItemProps) => {
	return "NavItem";
};
