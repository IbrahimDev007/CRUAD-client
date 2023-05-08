import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
	const user = useLoaderData();
	return (
		<div>
			Total User {user.length}
			{user.map((user) => (
				<p key={user._id}>
					{user.name}
					{user.email}
				</p>
			))}
		</div>
	);
};

export default Users;
