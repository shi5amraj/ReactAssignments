import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { AuthContext } from './Components/Context';
import { useContext } from 'react';

function App() {
  


  const {isLoggedIn}= useContext(AuthContext);

  return (
  

    <div className="App">
      {
     isLoggedIn? (<><Nav/><Home/></>):(<Login/>) 
      
      }
    </div>

  
  );
}

export default App;
