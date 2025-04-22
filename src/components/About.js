import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import { Component } from "react"
import UserContext from "../utils/UserContext"

class About extends Component{
constructor(){
  //  console.log("parent contructor")
    super()
    this.state={
        gitData : "",
        name : ""
    }
}
async componentDidMount(){
   // console.log("parent component did mount")
    const data = await fetch('https://api.github.com/users/manibharathis')
    const jsonData = await data.json()
    console.log(jsonData)
    this.setState(jsonData)
}

render(){
   // console.log("parent render")
    
    return(
        <div className="">
                   <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loginName }) => (
              <h1 className="text-xl font-bold">{loginName}</h1>
            )}
          </UserContext.Consumer>
        </div>
                    <UserClass name={"mani"} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
                  
                </div>
    )
}
}
// const About=()=>{
//     return(
//         <div className="about">
//             <h3>About</h3>
           
//             <UserClass name={'Mani Bharathi'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
//         </div>
//     )

// }

export default About