import { ApiResponse, QueryParams } from "../types/api.type"

const URI = "https://dummyjson.com"

/**
 *
 * @param url
 * @param params
 * @param options
 * @returns Promise<T>
 */
export const api = async <T = any>(
	url: string,
	params?: QueryParams,
	options?: RequestInit,
): Promise<ApiResponse<T>> => {
	try {
		// Формируем URL с параметрами
		const queryString = buildQueryString(params || {})
		const fullUrl = `${URI}/${url}${queryString}`

		// Выполняем запрос
		const response = await fetch(fullUrl, {
			headers: {
				"Content-Type": "application/json",
			},
			...options,
		})

		// Проверяем статус ответа
		if (!response.ok) {
			throw new Error(
				`HTTP error! status: ${response.status} - ${response.statusText}`,
			)
		}

		// Парсим данные
		const data = await response.json()

		return {
			data: data as T,
			error: null,
			status: response.status,
		}
	} catch (error) {
		// Обрабатываем ошибки
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred"

		if (process.env.NODE_ENV === "development") {
			console.error(`🌐 API Error [${url}]:`, errorMessage)
		}

		return {
			data: null,
			error: errorMessage,
			status: error instanceof Response ? error.status : undefined,
		}
	}
}
const buildQueryString = (params: QueryParams): string => {
	if (!params) return ""
	const cleanParams = Object.entries(params).reduce(
		(acc, [key, value]) => {
			if (value !== undefined && value !== null) {
				acc[key] = String(value)
			}
			return acc
		},
		{} as Record<string, string>,
	)
	const queryString = new URLSearchParams(cleanParams).toString()
	return queryString ? `?${queryString}` : ""
}
