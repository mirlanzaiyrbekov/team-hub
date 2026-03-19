import { ThemeProvider } from "@/app/providers/theme-provider"
import { SearchBar } from "@/shared/components"
import { SideBar } from "@/shared/components/SideBar"
import { SidebarProvider } from "@/shared/components/ui/sidebar"
import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<SideBar />
				<SearchBar />
				<main className="w-full px-2 pt-20 md:px-4">
					<Outlet />
				</main>
			</SidebarProvider>
		</ThemeProvider>
	)
}
