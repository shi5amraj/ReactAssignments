import { useContext } from "react";
import { AuthContext } from "./Context";
import "./Nav.css"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Nav({children})
{
    const {setIsLoggedIn,userName}=useContext(AuthContext);
    const navigate=useNavigate();

const logout=()=>{
    setIsLoggedIn(false);
    navigate("/");


}

    return(
        <>
        <div className="nav-container">
            <div className="nav-logo-container">
                <img  src="data:image/png;base64,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" alt="no img" />
               <h1>Logo</h1>
            </div>
            <div className="nav-item-container">
                <Link to="/"><div>Home</div></Link> 
                <Link to="/technologies"><div>Technologies</div></Link> 
                <Link to="/products"><div>Products</div></Link>
                <Link to="/services"><div>Services</div></Link>
                <Link to="/contact"><div>Contact Us</div></Link>
            </div>
            <div className="nav-logout-container">
            <button onClick={logout}>Logout</button>
            <span style={{color:"yellow"}}>Welcome: {userName}</span>

            </div>


        </div>
        
        </>


    );


}
export default Nav;