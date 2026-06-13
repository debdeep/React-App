/*
    DOM Node Structure -
        <div id=parent>
            <div id="child">
                <h1> Header Tag</h1>
                <h2> Sub Header Tag </h2>
            </div>
        </div
*/

const dom = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { id: "id-1" }, "Header Tag"),
            React.createElement("h2", { id: "id-2" }, "Sub Header Tag"),
        ])
);

// const heading = React.createElement("h1", { id: "app-heading" }, "Welcome to React App");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);
console.log(dom);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(dom);




