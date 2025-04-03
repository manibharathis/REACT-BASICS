import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [isLogin , setIsLogin] = useState(false);
    const handleClick=()=>{
        setIsLogin(!isLogin)
    }
    return(
    <div className ='header' >
    <img className='logo-img' src={LOGO_URL}/>
    <div className='nav-links'>
        <div className='home'>Home</div>
        <div className='about'>About</div>
        <div className='contact-us'>Contact Us</div>
        <div className='cart'>Cart</div>
        {isLogin?<button className='login' onClick={()=>{setIsLogin(!isLogin)}}>Logout</button>:<button className='login'  onClick={handleClick}>Login</button>}
        
    </div>
    </div>
    )

}
export default Header;