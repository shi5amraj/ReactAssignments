import { useEffect,useState } from "react";
import Card from "./Card";



const Fetch =() =>{
    const [product,setProduct] = useState([])


useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [])


    return(
        <div>
            {

            product.map((ele) =>{
                return(
                    <Card prod = { ele.id } title={ ele.title } price={ ele.price } image={ ele.image } />

                )
            })
}
            

        </div>
    )

}
export default Fetch;