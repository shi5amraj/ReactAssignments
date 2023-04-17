
import { useContext } from "react";
import myContext from "./context";
function D()
{
    const contextData= useContext(myContext);

    return(

        <div>
            <h1>D Component</h1>
            <p>A Component Data :{contextData}</p>
            
            </div>
       
    )
}
export default D;