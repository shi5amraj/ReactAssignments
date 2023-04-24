import  "./Product.css"
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Allcontext } from "./Context";

function Cart(props) {

    const {cart,setCart}= useContext(Allcontext);

    const removeItem=(id)=>
    {
        const removedList=cart.filter((ele)=>
        {
            return ele.id !==id
        })
        
        setCart([...removedList])

    }

    return (
        <div className="product-container" >
        <h1>Your Cart</h1>

       <div>
       {
        
       (cart.length>0) ?<div className="product-list-div" >
        {
        cart.map((product)=>{


            return(
                <div className="cart-product-card">
                 { <img src={product.image} alt="No Image to Show"/> }
                 <h4 >{product.title}</h4>
                 <span style={{color:"black",fontWeight:"bold"}}>Price: $ {product.price}</span>
                 <h2 style={{color:"green"}}>Free Delivery</h2>
                 <div style={{height:"10%",width:"90%",marginBottom:"10px"}}>
                  <button   onClick={()=>{removeItem(product.id)}}>Remove from Cart</button>
                  

                  </div>
                </div>
            )
        })
        }
       </div>
       : <div className="no-product-div"> <h1 >No Product to Show</h1></div>
       }
        
       </div>
        
        </div>
    );
  }
  
  export default Cart;
  