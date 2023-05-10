import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users.jsx";
import UpdateUser from "./UpdateUser.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/user",
		element: <Users />,
		loader: () => fetch("http://localhost:5000/user"),
	},
	{
		path: "/update/:id",
		element: <UpdateUser />,
		loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
