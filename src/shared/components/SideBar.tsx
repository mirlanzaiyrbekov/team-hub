import {
	Sidebar,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import React from "react"

export const SideBar: React.FC = () => {
	return (
		<Sidebar collapsible="icon" className="shadow-xl">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>ad</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
		</Sidebar>
	)
}
