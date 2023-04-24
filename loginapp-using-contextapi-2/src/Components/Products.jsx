
import  "./Product.css"
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
function Products()
{
   const [products,setProducts]= useState([]);

   
   useEffect(
  ()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
       setProducts(data);
    })

  },[])


    return(
<div className="product-container" >
        <h1>Product Component</h1>

       <div>
       {
       (products.length>0) ?<div className="product-list-div" >
        {
        products.map((product)=>{

            return(
                <div className="product-card">
                 { <img src={product.image} alt="No Image to Show"/> }
                 <h4 >{product.title}</h4>
                 <span style={{color:"black",fontWeight:"bold"}}>Price: $ {product.price}</span>
                 <div style={{height:"10%",width:"90%"}}>
                  <Link to={`/productdetails/${product.id}`}><button >More Detail</button></Link>
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
    )

}
export default Products;