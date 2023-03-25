import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [state,setState]=useState(0);

   let increaseCount=()=>
   {
  
   setState(state+1);

   }


  return (
    <div className="App" >
        <h1>Counter App</h1>
      <div className='card'>
        
        <h1>Current Count is {state}</h1>
          <button onClick={increaseCount}>Increase Count</button>

         </div>
      
    </div>
  );
}

export default App;
