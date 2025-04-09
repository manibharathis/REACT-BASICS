import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import { Component } from "react"
class About extends Component{
constructor(){
    console.log("parent contructor")
    super()
}
componentDidMount(){
    console.log("parent component did mount")
}
render(){
    console.log("parent render")
    return(
        <div className="about">
                    <h3>About</h3>
                   
                    <UserClass name={'Mani Bharathi 1'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
                    <UserClass name={'Mani Bharathi 2'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
                    <UserClass name={'Mani Bharathi 3'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
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