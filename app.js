import React from "react";
import ReactDOM from "react-dom/client";
const h1 = React.createElement(
	"h1",
	{
		id: "title",
	},
	"Hello Wordd"
);

const root1 = document.getElementById("root");

const root = ReactDOM.createRoot(root1);

root.render(h1);
