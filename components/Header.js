import { LOGO_URL } from "../utils/constants";

const Header=()=>(
    <div className ='header' >
    <img className='logo-img' src={LOGO_URL}/>
    <div className='nav-links'>
        <div className='home'>Home</div>
        <div className='about'>About</div>
        <div className='contact-us'>Contact Us</div>
        <div className='cart'>Cart</div>
    </div>
    </div>


)
export default Header;