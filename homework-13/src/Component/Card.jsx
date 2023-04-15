// import {useState} from "react"
import Button from "./Button";

const Card =({image,title,price}) =>{


    // const[image,setImage] = useState("")
    // const[title,setTitle] = useState("")
    // const[price,setPrice] = useState("")




    return(
        <div className="card">
            <div className="carddd">
            <img src = {image}alt="" height = "100px" width = "100px"/>
            </div>
            <div>
                <h6>
                    Title : {title}
                </h6>
                <div>
                    <p>
                       Price  :{price}
                    </p>
                </div>
                <div>
                    <Button text = "Watch"/>
                </div>
            </div>
        </div>

    )

}
export default Card;