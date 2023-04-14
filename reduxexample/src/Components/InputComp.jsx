
import { useState } from "react"
import myStore from "../Redux/Store"

function InputComp()
{
    const[state,setState]= useState("");
  const calldispatch=()=>
  {
   myStore.dispatch({
    type:"name",
    userName:state
   })

  }

    return(


        <div style={{marginTop:"100px",textAlign:"center"}}>

            <h2>Input Component</h2>
            <input type="text" onChange={(e)=>{ setState(e.target.value)}} />
            <button onClick={calldispatch}>send data</button>
        </div>
    )


}
export default InputComp;