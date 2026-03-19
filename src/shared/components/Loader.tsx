import React from "react"

export const Loader: React.FC = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-full z-100 flex items-center justify-center">
			<div className="relative w-10 h-10">
				{/* Внешнее кольцо */}
				<div className="absolute top-0 left-0 w-full h-full border-2 border-gray-200 rounded-full"></div>
				{/* Крутящаяся часть */}
				<div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
			</div>
		</div>
	)
}
