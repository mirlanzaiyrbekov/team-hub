import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import { ChartArea, Phone, UsersRound, Workflow } from "lucide-react"
import React from "react"
import { Separator } from "./ui/separator"

export const SideBar: React.FC = () => {
	return (
		<Sidebar collapsible="icon" className="shadow-xl relative">
			<SidebarHeader className="py-3 my-5" />
			<SidebarContent className="p-6 gap-8">
				<h4 className="flex items-center gap-2 text-xl font-bold text-purple-800">
					<Workflow size={18} />
					TeamHub
				</h4>
				<Separator />
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href="#">
								<UsersRound className="text-textcolor" size={20} />
								<span className="text-sm font-medium text-textcolor">
									Сотрудники
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href="#">
								<ChartArea className="text-textcolor" size={20} />
								<span className="text-sm font-medium text-textcolor">
									Аналитика данных
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href="#">
								<Phone className="text-textcolor" size={20} />
								<span className="text-sm font-medium text-textcolor">
									Тех.поддержка
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="#">
							<span className="text-xs font-light text-textcolor">
								Разработано @ZionLabs 2026
							</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarFooter>
		</Sidebar>
	)
}
