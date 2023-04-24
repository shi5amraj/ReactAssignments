import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './Components/Context';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from './Components/Login';
import Products from "./Components/Products";
import Services from "./Components/Services"
import {Navigate, Route,Routes} from "react-router-dom";
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import PageNotFound from './Components/PageNotFound';
import Technologies from './Components/Technologies';
import HTML from './Components/HTML';
import CSS from './Components/CSS';
import JavaScript from './Components/JavaScript';
import Angular from './Components/Angular';
import React from './Components/React';
import ProtectedRoute from './Components/ProtectedRout';

function App() {
 
  const {isLoggedIn}= useContext(AuthContext);
 

  return (
    <div className="App">
    
      {/* {
     
     isLoggedIn ?(<div><Nav/>
     <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/support" element={<Home/>}></Route>
     </Routes>
     
     </div>)
     
     :<Login/>
     
} */}
{
isLoggedIn ?
(<div>
  <Nav/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/technologies" element={<ProtectedRoute><Technologies/></ProtectedRoute> }>
<Route path="" element={<Navigate to="html"/>}/>
<Route path="html" element={<ProtectedRoute><HTML/></ProtectedRoute>}></Route>
<Route path="css" element={<ProtectedRoute><CSS/></ProtectedRoute>}></Route>
<Route path="js" element={<ProtectedRoute><JavaScript/></ProtectedRoute>}></Route>
<Route path="angular" element={<ProtectedRoute><Angular/></ProtectedRoute>}></Route>
<Route path="react" element={<ProtectedRoute><React/></ProtectedRoute>}></Route>

</Route>

<Route path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>}></Route>
<Route path="/services" element={<ProtectedRoute><Services/></ProtectedRoute>}></Route>
<Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}></Route>
<Route path="/productdetails/:id" element={<ProtectedRoute><ProductDetails/></ProtectedRoute>}></Route>
<Route path="*" element={<PageNotFound/>}></Route>
</Routes>
</div>
)
: (<Login/>)

}

    </div>
    
  );
}

export default App;
