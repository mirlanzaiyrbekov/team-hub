import { Moon, Sun, Waypoints } from "lucide-react"
import React from "react"
import { useTheme } from "../hooks/use-theme"
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

export const SearchBar: React.FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<header className="absolute top-0 left-0 w-full z-100 p-4 shadow-md bg-searchbar">
			<div className="flex items-center justify-between">
				<div className="flex gap-2 items-center">
					<Button
						variant={"ghost"}
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? <Sun /> : <Moon />}
					</Button>
					<Button variant={"ghost"}>
						<Waypoints />
						Подключить
					</Button>
				</div>
				<Field orientation="horizontal" className="max-w-sm">
					<Input type="search" placeholder="Search..." />
					<Button variant={"outline"}>Search</Button>
				</Field>
			</div>
		</header>
	)
}
