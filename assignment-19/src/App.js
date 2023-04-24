import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"
import Products from './Components/Products';
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
