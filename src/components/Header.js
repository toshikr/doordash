import { useContext, useState } from "react";
import { APP_LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserProfileContext from "../utils/contextAPIs/UserProfileContext";
const Header = () => {
    const [loginBtnName,setLoginBtnName] = useState("Login");

    const [cartBtn,setCartBtn] = useState("");

    // const UsernameData = useContext(UserProfileContext);
    const {loggedInUser} = useContext(UserProfileContext);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-30" src={ APP_LOGO_LINK} />    
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        OnlineStatus:{onlineStatus ? "🟢"  : "🔴"} 
                    </li>
                    <li className="px-4"> 
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/about"> About Us </Link> 
                    </li>    
                    <li className="px-4"> 
                        <Link to="/contact">Contact Us </Link> 
                    </li>    
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>  
                    <button className="login-btn" onClick={() => {
                        loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login");
                    }}>{loginBtnName}
                    </button>
                    <li className="px-4">
                        <Link>{loggedInUser}</Link>
                    </li>
                </ul>  
            </div>
        </div>
   );
};

export default Header;
