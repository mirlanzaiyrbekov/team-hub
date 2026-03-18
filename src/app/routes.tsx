import { Home, NotFound } from "@/pages"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
		errorElement: <NotFound />,
	},
])
