import React from 'react'
import ReactDOM from 'react-dom/client'
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

const LogoContainer = () =>(
    <img className='logo-img' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
    
)  
const SearchContainer = () =>(
    <div className='search-container'>
    <div className='search-bar'><input type='text'></input></div>
    <button >Search</button>
    </div>
)              
   
const Home =()=>(
    <div className='home'>Home</div>
)
const About=()=>(
    <div className='about'>About</div>
)
const ContactUs=()=>(
    <div className='contact-us'>Contact Us</div>
)
const Cart=()=>(
    <div className='cart'>Cart</div>
)
const NavLinks=()=>(
    <div className='nav-links'>
        <Home />
        <About />
        <ContactUs />
        <Cart />
    </div>
)
const Header=()=>(
    <div className ='header' >
    <LogoContainer />
    <NavLinks />
    </div>


)
const Card = () => (
  <div className="card">
    <img
      alt="res-img"
      className="res-img"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6b7ab6c81944a491c8436cee302a9243"
    ></img>
    <div className='res-details'>
      <p>Arun Icecream</p>
      <p>4.8</p>
      <p>desserts,icecreams</p>
    </div>
  </div>
);
const CardContainer=()=>(
    <div className='card-container'>
        <Card />
    </div>
)
const Body =() =>{
    return(
        <div>
        <SearchContainer />
        <CardContainer />
        </div>
    )
}

const MainDiv = () => (
  <div>
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainDiv />);




















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