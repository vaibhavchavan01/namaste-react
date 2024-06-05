// const heading = React.createElement("h1", {}, "Hello World from react!");
const parent = React.createElement("dev", {
    id: "parent"
}, React.createElement("dev", {
    id: "child"
}, [
    React.createElement("h1", {}, "Im in h1 tag"),
    React.createElement("h2", {}, "Im in h2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
