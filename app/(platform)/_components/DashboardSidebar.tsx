"use client";

import MySidebarUser from "@/components/MySidebarUser";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";

import { SIDEBAR_ROUTES } from "@/constants/appConstants";
import Link from "next/link";

export function DashboardSidebar() {
	const { setOpenMobile } = useSidebar();

	const handleClick = () => {
		setOpenMobile(false);
	};

	return (
		<Sidebar className="pt-20 pl-4">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Tableros</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{SIDEBAR_ROUTES.map((item) => (
								<SidebarMenuItem onClick={handleClick} key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<MySidebarUser
					profile={{
						name: "Tom Pad",
						email: "tom@tag.com",
					}}
					handleClose={handleClick}
				/>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
