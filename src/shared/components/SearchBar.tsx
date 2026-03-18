import { ArrowLeft, ArrowRight, Moon, Sun } from "lucide-react"
import React from "react"
import { useTheme } from "../hooks/use-theme"
import { Button } from "./ui/button"
import { useSidebar } from "./ui/sidebar"

export const SearchBar: React.FC = () => {
	const { setTheme, theme } = useTheme()
	const { toggleSidebar, open } = useSidebar()
	return (
		<div className="p-2 shadow-md bg-searchbar">
			<Button variant={"ghost"} onClick={toggleSidebar}>
				{open ? <ArrowLeft /> : <ArrowRight />}
			</Button>
			<Button
				variant={"ghost"}
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? <Sun /> : <Moon />}
			</Button>
		</div>
	)
}
