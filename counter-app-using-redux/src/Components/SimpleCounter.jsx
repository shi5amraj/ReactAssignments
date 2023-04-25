import { useState } from "react";

function SimpleCounter() {
    // const [state, dispatch] = useReducer(reducerFn, {
    //   count: 0,
    //   products: [],
    //   users: [],
    // });
    const [state,setState]=useState(0);

    const incCount=()=>
    {
     setState(state+5);
    }

    const decCount=()=>
    {
        setState(state-2);
        
    }
    const resetCount=()=>
    {
        setState(0); 
    }
  
 
  
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Count Value is {state}</h1>
        <button
        //   onClick={() => {
        //     dispatch({
        //       type: "inc",
        //       countValue: 5,
        //     });
        //   }}
        onClick={incCount}
        >
          Inc Count
        </button>
        &nbsp;&nbsp;
        <button
        //   onClick={() => {
        //     dispatch({
        //       type: "dec",
        //       countValue: 2,
        //     });
        //   }}
        onClick={decCount}
        >
          Dec Count
        </button>
        &nbsp;&nbsp;
        <button
        //   onClick={() => {
        //     dispatch({
        //       type: "reset",
        //       payload: 0,
        //     });
        //   }}
        onClick={resetCount}
        >
          Reset
        </button>
      </div>
    );
  }
  
  export default SimpleCounter;