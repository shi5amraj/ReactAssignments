import { useReducer } from "react";

function CounterUsingRedux() {
 
    const reducerFn=(state,action)=>{

        if(action.type==="incCount")
        {   
            return{
                ...state,
                count: state.count+action.counterVal
            };
           

        }
        else if(action.type==="decCount")
        {
            return{
                ...state,
                count:state.count-action.counterVal
            };
            
        }
        else if(action.type==="resetCount")
        {   
            return {
                ...state,   
                count:action.payload
            };
            
        }


   return state
    }


    const decreaseCount=()=>
    {

        dispatch({
            type:"decCount",
            counterVal:2
        })
    }

    const increaseCount=()=>
    {

        dispatch({
            type:"incCount",
            counterVal:5
        })
    }
    const resetCount=()=>
    {

        dispatch({
            type:"resetCount",
            payload:0
        })
    }

   
 const[state,dispatch]  =useReducer(reducerFn,{count:0})
  
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Count Value is {state.count}</h1>
        <button onClick={ increaseCount}>Inc Count</button> &nbsp;&nbsp;
        <button onClick={ decreaseCount}> Dec Count</button>&nbsp;&nbsp;
        <button onClick={resetCount} > Reset </button>
      </div>
    );
  }
  
  export default CounterUsingRedux;