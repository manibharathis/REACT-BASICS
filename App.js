{
  /* <div id="grandparent">
   <div id="parent">
            <div id="child">
                <h1>I am h1</h1>
            </div>
            <div id="child2">
                <h1>I am h2</h1>
            </div>
    </div>
    <div id="parent2">
            <div id="child3">
                <h1>I am h3</h1>
            </div>
            <div id="child4">
                <h1>I am h4</h1>
            </div>
    </div>
</div> */
}
//const heading = React.createElement("h1",{id:"heading"},"Hello World");
const divElement = React.createElement("div", { id: "grandparent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "child1" }, "I am H1"),
    React.createElement("h1", { id: "child1" }, "I am H2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "child3" }, "I am H3"),
    React.createElement("h1", { id: "child4" }, "I am H4"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);
