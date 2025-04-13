import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [isLogin , setIsLogin] = useState(false);
    const handleClick=()=>{
        setIsLogin(!isLogin)
    }
    const isOnline= useOnlineStatus()

    return(
    <div className ='flex justify-between' >
    <img className='w-56'  src={LOGO_URL}/>
    <div className=' flex mt-7 justify-evenly'>
       <div className="online-status">Online Status:  {isOnline ? "✅" : "🔴"}</div>
        <div className='home'><Link to='/'>Home</Link></div>
        <div className='about'><Link to="/about">About</Link></div>
        <div className='contact-us'><Link to="/contact">Contact Us</Link></div>
        <div className='cart'>Cart</div>
        <div className='groceries'><Link to="/grocery">Groceries</Link></div>
        {isLogin?<button className='login' onClick={()=>{setIsLogin(!isLogin)}}>Logout</button>:<button className='login'  onClick={handleClick}>Login</button>}
        
    </div>
    </div>
    )

}
export default Header;