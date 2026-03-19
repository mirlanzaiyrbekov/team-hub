import { api } from "@/shared/api/api"
import { UserResponse } from "../model/types"

const API_ENDPOINTS = {
	USERS: "users",
	USER_BY_ID: (id: number) => `users/${id}`,
	SEARCH: "users/search",
} as const

export const userApi = {
	/**
	 * @description GET ALL USERS
	 * @param limit - количество пользователей
	 * @param skip - пропустить пользователей
	 * @returns UsersResponse
	 */
	getUsers: async (limit: number = 5, skip?: number) => {
		return await api<UserResponse>(API_ENDPOINTS.USERS, { limit, skip })
	},
}
