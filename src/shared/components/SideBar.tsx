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
import { Link } from "react-router-dom"
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "./ui/item"
import { Separator } from "./ui/separator"

export const SideBar: React.FC = () => {
	return (
		<Sidebar collapsible="icon" className="shadow-xl sticky top-0">
			<SidebarHeader className="py-3 my-5" />
			<SidebarContent className="p-6 gap-8">
				<h4 className="flex items-center gap-2 text-xl font-bold text-purple-800">
					<Workflow size={18} />
					TeamHub
				</h4>
				<Separator className="opacity-50" />

				<SidebarMenu className="flex flex-col gap-2">
					<Link to="/">
						<Item variant="outline">
							<ItemMedia variant="icon">
								<UsersRound size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Сотрудники</ItemTitle>
								<ItemDescription>
									Список сотрудников, подробная информация
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
					<Link to="#">
						<Item variant="outline">
							<ItemMedia variant="icon">
								<ChartArea size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Аналитика данных</ItemTitle>
								<ItemDescription>
									Подробная аналитика данных компании
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
					<Link to="#">
						<Item variant="outline">
							<ItemMedia variant="icon">
								<Phone size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Тех.поддержка</ItemTitle>
								<ItemDescription>
									Техническая поддержка клиентов 24/7
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
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
