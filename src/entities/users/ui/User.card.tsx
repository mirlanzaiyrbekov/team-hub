import React from "react"
import { userApi } from "../api/user.api"
import { User } from "../model/types"

export const UserCard: React.FC = () => {
	const [users, setUsers] = React.useState<User[] | null>()

	React.useEffect(() => {
		const getUsers = async () => {
			const users = await userApi.getUsers()
			console.log(users)
			setUsers(users.data?.users)
		}
		getUsers()
	}, [])

	return (
		<div>
			{users?.map((user) => (
				<ul key={user.id}>
					<li>{user.firstName}</li>
					<li>{user.lastName}</li>
					<li>{user.email}</li>
				</ul>
			))}
		</div>
	)
}
