import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
	const loadedData = useLoaderData();
	const [user, setUser] = useState(loadedData);

	const handleDeleteUser = (id) => {
		fetch(`http://localhost:5000/user/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					console.log("Deleted Succesfully");
					const remain = user.filter((user) => user._id !== id);
					setUser(remain);
				}
			});
	};
	return (
		<div>
			Total User {user.length}
			{user.map((user) => (
				<p key={user._id}>
					{user.name}
					{user.email}
					<Link to={`update/${user._id}`}>
						<button>Update</button>
					</Link>
					<button onClick={() => handleDeleteUser(user._id)}>X</button>
				</p>
			))}
		</div>
	);
};

export default Users;
