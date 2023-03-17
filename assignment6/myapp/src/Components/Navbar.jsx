import '../Components/Navbar.css'

function Navbar()
{

    return(

        <div className="navMainDiv">
            <div className="navLeftDiv">
                <h1>Hootsuit</h1>
            </div>
            <div className="navMidDiv">
             <ul>
                <li>Platform</li>
                <li>Plans</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Education</li>


             </ul>

            </div>
            <div className="navRightDiv">

                <button className="btn">Contact Us</button>
                <button className="btn">Log in</button>
                <button className="btn">Sign Up</button>

            </div>
   



        </div>
    )
}
export default Navbar