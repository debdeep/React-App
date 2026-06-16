import React from "react";
import ReactDOM from "react-dom/client";

// React Element - JSX is not HTML in JS it is actually HTML-LIKE in js to be used in react
const heading = <h1>Welcome to React using JSX</h1>

const Paragraph = () => (<p>I am a Paragraph Component</p>);
const version = 18.0;

// React Functional Component- which will return some jsx | Name frist word should be capital
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Welcome to React {version} using JSX </h1>
        <Paragraph />
    </div>
);

// const HeadingComponent = () => {
//     return <h1>Welcome to React using JSX </h1>;
// }

console.log("JSX:", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
