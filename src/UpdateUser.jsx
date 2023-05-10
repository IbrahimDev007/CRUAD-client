import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateUser = () => {
	const loadedUser = useLoaderData();
	const param = useParams();
	console.log(param);
	const updateHandaler = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		fetch(`http://localhost:5000/update/${loadedUser._id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert("Modified sucessfully");
				}
			});
	};
	return (
		<div>
			update user Information
			{loadedUser.name}
			<div>
				<form onSubmit={updateHandaler}>
					<input type="text" name="name" defaultValue={loadedUser?.name} />
					<br />
					<input
						type="email"
						name="email"
						id=""
						defaultValue={loadedUser?.email}
					/>
					<br />
					<input type="submit" value="Update Value" />
				</form>
			</div>
		</div>
	);
};

export default UpdateUser;
