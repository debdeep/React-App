import React from "react";
import ReactDOM from "react-dom/client";

// JSX is not HTML in JS it is actually HTML-LIKE in js to be used in react
const jsx = <h1>Welcome to React JSX</h1>

console.log("JSX:", jsx);

const customElement = React.createElement("h1", { id: "heading", key: "h1" }, "Welcome to React");

console.log("createElement:", customElement);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(customElement);
