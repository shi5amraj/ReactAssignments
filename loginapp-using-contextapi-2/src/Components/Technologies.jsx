
import "../Components/Technologies.css"
import {Link,Outlet} from "react-router-dom";

function Technologies()
{

    return(

        <div className="technologies-container">
        
        <div className="left-container">
         <Link to="html">HTML</Link>
         <Link to="css">CSS</Link>
         <Link to="js">JavaScript</Link>
         <Link to="angular">Angular</Link>
         <Link to="react">React</Link>


        </div>
        <div className="right-container">

            <Outlet/>
        </div>
        </div>

    );


}
export default Technologies;