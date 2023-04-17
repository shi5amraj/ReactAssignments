import { useState } from "react";
import B from "./B";
import myContext from "./context"


function A()
{
 const [state,setState]= useState("Geekster");

    return(

        <div>

            <h1>A Component</h1>
            <button onClick={()=>{setState("Shivam")}}>Send Data to D</button>
            <myContext.Provider value={state}>

            <B/>
            </myContext.Provider>
           
        </div>
        
    );
}
export default A;