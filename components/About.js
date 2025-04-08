import User from "./User"
import UserClass from "./UserClass"
const About=()=>{
    return(
        <div className="about">
            <h3>About</h3>
            <User name={'Mani Bharathi'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
            <UserClass name={'Mani Bharathi'} phone={'9894459170'} mail={'remasekar.96@gmail.com'} location={'chennai'}/>
        </div>
    )

}
export default About