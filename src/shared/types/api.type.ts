export type QueryParams = {
	limit?: number | string
	skip?: number | string
	select?: string
	[key: string]: any // для дополнительных параметров
}
export type ApiResponse<T> = {
	data: T | null
	error: string | null
	isLoading?: boolean
	status?: number
}
