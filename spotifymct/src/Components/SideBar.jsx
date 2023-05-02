


import { BsFillHouseDoorFill,BsSearch } from "react-icons/bs"
import { BiLibrary } from "react-icons/bi"
import { FiPlusSquare } from "react-icons/fi"
import { BsFillHeartPulseFill } from "react-icons/bs"
import {Link} from "react-router-dom";

import "./SideBar.css"
function SideBar()
{

    return(
         
           <div className="sidebar-container">
           <div className="sidebar-logo-container">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4GwllHgneveoLzQuxwD_yUSBp7_KrqMEqLJMjEKQxA&s" alt="no image" className="sidebar-logo" />
             <h3>Spotify</h3>

           </div>
           <div className="sidebar-top-container">
           <Link to="/"><div className="sidebar-item-decor">   
              <BsFillHouseDoorFill size={30}/>
            <span>Home</span>
             </div>
             </Link>

             <Link to="/search">
                <div className="sidebar-item-decor">   
                <BsSearch size={30}/>
                <span>Search</span>
             </div>
             </Link>

             <Link to="/lib">
                <div className="sidebar-item-decor">   
                <BiLibrary size={30}/>
                 <span>Your Library</span>
             </div>
             </Link>
           </div>
           
           <div className="sidebar-mid-container">
           
           <Link to="/playlist"><div className="sidebar-item-decor">   
                <FiPlusSquare size={30}/>
                <span>Create Playlist</span>
             </div>
             </Link>
             <Link to="/likedsong"><div className="sidebar-item-decor">   
              <BsFillHeartPulseFill size={30}/>
              <span> Liked songs</span>
             </div>
             </Link>

           </div>
           <div className="sidebar-bottom-container">
            <p>Legal  &nbsp; &nbsp; &nbsp; Privacy Center</p>
            <p>Privacy Policy  &nbsp; &nbsp; &nbsp; Cookies</p>
            <p>About Ads  </p>
            <p>Cookies &nbsp; &nbsp; &nbsp;</p>

           </div>
         

           </div>
           


    )

}

export default SideBar;