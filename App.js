import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider, Outlet, RouterProvider } from 'react-router-dom'



const MainDiv = () => (
  <div>
    <Header />
   <Outlet />
  </div>
);
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainDiv />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
            path:'/about',
            element:<About />
            },
            {
            path:'/contact',
             element:<Contact />   
            }]
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);





// //main div
//     //1. header
//     1.1 logo conteiner
        //1.1.1 logo image
    //1.2 home
    //1.3 about
    //1.4 cart

// //2. body component
        //2.1 search bar
        //2.2 search button
        //2.3 card body compoent
            //2.3.1 card compoent
                //2.3.2 card img
                //2.3.3 title
                //2.3.4 rating
                //2.3.5 cuisine

     






















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