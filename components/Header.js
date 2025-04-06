import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [isLogin , setIsLogin] = useState(false);
    const handleClick=()=>{
        setIsLogin(!isLogin)
    }
    return(
    <div className ='header' >
    <img className='logo-img' src={LOGO_URL}/>
    <div className='nav-links'>
        <div className='home'><Link to='/'>Home</Link></div>
        <div className='about'><Link to="/about">Abou</Link>t</div>
        <div className='contact-us'><Link to="/contact">Contact Us</Link></div>
        <div className='cart'>Cart</div>
        {isLogin?<button className='login' onClick={()=>{setIsLogin(!isLogin)}}>Logout</button>:<button className='login'  onClick={handleClick}>Login</button>}
        
    </div>
    </div>
    )

}
export default Header;