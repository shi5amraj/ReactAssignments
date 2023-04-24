
import {useParams} from "react-router-dom";
import {useEffect,useState} from "react"



function ProductDetails()
{  
    const [product,setProduct]=useState({});

    const {id}=useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((resp)=>resp.json())
        .then((data)=>
        {
         setProduct(data)
         console.log(data)
        })
    

    },[])

    return(

        <div className="product-details-container" style={{width:"1364px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",textAlign:"center"}}>
        <h1>Product Details Component</h1>
        <div style={{width:"500px",height:"500px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",boxShadow:"0 0 12px black"}}>
          <h2>{product.category}</h2>
          <img src={product.image} alt="" style={{width:"200px",height:"200px"}}/>
          <h3>{product.title}</h3>
        
          <h4>Price : ${product.price}</h4>
          <span>{product.description
}</span>
        </div>
        
        </div>

    );


}
export default ProductDetails;