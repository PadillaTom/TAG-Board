import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: "Home",
	},
	{
		title: "Inbox",
		url: "#",
		icon: "Inbox",
	},
	{
		title: "Calendar",
		url: "#",
		icon: "Calendar",
	},
	{
		title: "Search",
		url: "#",
		icon: "Search",
	},
	{
		title: "Settings",
		url: "#",
		icon: "Settings",
	},
];

export function DashboardSidebar() {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent className="py-14 pl-4">
				<SidebarGroup>
					<SidebarGroupLabel>Tableros</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
