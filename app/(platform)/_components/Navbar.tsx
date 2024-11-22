import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Navbar = () => {
	return (
		<nav className="fixed t-0 z-50 w-full h-14 border-b shadow-sm bg-white flex items-center px-6">
			{/* Mobile Sidebar */}
			<div className="flex items-center gap-x-4">
				<div className="hidden md:flex">
					<Logo></Logo>
				</div>
				<Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-4">
					Crear!
				</Button>
				<Button size="sm" className="rounded-sm block md:hidden">
					<Plus className="h-4 w-4"></Plus>
				</Button>
			</div>
			<div className="ml-auto flex items-center gap-x-2">
				<Button size="sm" className="rounded-sm md:block hidden">
					Workspaces
				</Button>
				<Button size="sm" className="rounded-sm md:block hidden">
					User
				</Button>
			</div>
		</nav>
	);
};
