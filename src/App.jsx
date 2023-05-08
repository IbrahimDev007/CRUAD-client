import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		console.log(user);
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("inserted sucessfully");
					form.reset();
				}
			});
	};

	return (
		<>
			<h1>Form</h1>
			<form onSubmit={handleOnSubmit}>
				<input type="text" name="name" id="" />
				<br />
				<input type="email" name="email" id="" />
				<br />
				<input type="submit" value="Add User" />
			</form>
		</>
	);
}

export default App;
