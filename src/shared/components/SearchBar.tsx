import { Moon, Sun, Waypoints } from "lucide-react"
import React from "react"
import { useTheme } from "../hooks/use-theme"
import { MenuBar } from "./Menubar"
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

export const SearchBar: React.FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<header className="fixed top-0 left-0 w-full z-100 p-4 shadow-md bg-searchbar">
			<div
				className="flex flex-col-reverse items-start gap-3
				tablet:flex-row
			"
			>
				<div className="flex gap-2 items-center w-full">
					<Button
						variant={"ghost"}
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? <Sun /> : <Moon />}
					</Button>
					<Button variant={"ghost"}>
						<Waypoints />
					</Button>
					{/* MENUBAR */}
					<MenuBar />
				</div>
				<Field orientation="horizontal" className="xl:w-1/2">
					<Input type="search" placeholder="Поиск в системе..." />
					<Button variant={"outline"} className="text-xs">
						Поиск
					</Button>
				</Field>
			</div>
		</header>
	)
}
