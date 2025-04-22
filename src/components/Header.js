import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Header=()=>{
    const [isLogin , setIsLogin] = useState(false);
    const handleClick=()=>{
        setIsLogin(!isLogin)
    }
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const isOnline= useOnlineStatus()
    const {loginName} = useContext(UserContext)
    return(
    <div className ='flex justify-between h-30 mb-2 shadow-md' >
    <img className='w-56'  src={LOGO_URL}/>
    <div className=' flex mt-7 items-center'>
        <ul className="flex justify-between">
       <li className="px-4 py-1">Online Status:  {isOnline ? "✅" : "🔴"}</li>
        <li className='px-4 py-1'><Link to='/'>Home</Link></li>
        <li className='px-4 py-1'><Link to="/about">About</Link></li>
        <li className='px-4 py-1'><Link to="/contact">Contact Us</Link></li>
        <li className='px-4 py-1'>{loginName}</li>
        <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} )</Link>
          </li>
        <li className='px-4 py-1'><Link to="/grocery">Groceries</Link></li>
       <li className="mb-2 px-4 bg-orange-400 hover:bg-orange-700 text-white font-bold py-1  rounded-full "> {isLogin?<button  className="" onClick={()=>{setIsLogin(!isLogin)}}>Logout</button>:<button className='login'  onClick={handleClick}>Login</button>}
       
       </li>
        </ul>
    </div>
    </div>
    )

}
export default Header;