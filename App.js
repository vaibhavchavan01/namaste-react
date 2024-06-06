import React from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1>this is title element</h1>
)

const functionComponent = () => (
    <div>
        {title}
    </div>
)
// const heading = React.createElement("h1", {}, "Hello World from react!");
// const parent = React.createElement(
//     "dev",
//     { id: "parent" },
//     React.createElement(
//         "dev",
//         { id: "child" },
//         [React.createElement(
//             "h1",
//             {},
//             "Im in h1 tag"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "Im in h2 tag"  
//         )]
//     )
// )
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(functionComponent)