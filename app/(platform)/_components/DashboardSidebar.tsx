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
import { Home } from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Inicio",
		url: "/dashboard",
		icon: Home,
	},
];

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
							{items.map((item) => (
								<SidebarMenuItem key={item.title} onClick={handleClick}>
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
