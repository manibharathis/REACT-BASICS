import React from 'react'
import ReactDOM from 'react-dom/client'
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
// const divElement = React.createElement("div", { id: "grandparent" }, [
//   React.createElement("div", { id: "parent1",key:"1" }, [
//     React.createElement("h1", { id: "child1",key:"2" }, "I am H1"),
//     React.createElement("h1", { id: "child1",key:"3" }, "I am H2"),
//   ]),
//   React.createElement("div", { id: "parent2",key:"4" }, [
//     React.createElement("h1", { id: "child3",key:"5" }, "I am H3"),
//     React.createElement("h1", { id: "child4",key:"6" }, "I am H4"),
//   ]),
//]);
const heading = <h1 id="head">Hello React</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
