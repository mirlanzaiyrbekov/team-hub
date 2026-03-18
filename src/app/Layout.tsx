import { SearchBar } from "@/shared/components"
import { SideBar } from "@/shared/components/SideBar"
import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
	return (
		<main className="grid h-screen grid-rows-[auto_1fr]">
			{/* Topbar */}
			<SearchBar />
			{/* Main layout */}
			<div className="grid grid-cols-[250px_1fr]">
				{/* Sidebar */}
				<SideBar />
				{/* Content */}
				<div className="p-2 bg-background">
					<Outlet />
				</div>
			</div>
		</main>
	)
}
