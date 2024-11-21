"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem } from "./NavItem";
import { ROUTES } from "@/constants/appConstants";

interface SidebarProps {
	storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
	const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});

	const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
		if (expanded[key]) {
			acc.push(key);
		}
		return acc;
	}, []);

	const onExpand = (id: string) => {
		setExpanded((curr) => ({
			...curr,
			[id]: !expanded[id],
		}));
	};

	return (
		<aside>
			<div className="font-medium text-xs flex items-center mb-1">
				<span className="pl-4">Workspaces</span>
				<Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
					<Link href={ROUTES.profile}>
						<Plus className="h4 w-4"></Plus>
					</Link>
				</Button>
			</div>
			<Accordion defaultValue={defaultAccordionValue} type="multiple" className="space-y-2"></Accordion>
		</aside>
	);
};
