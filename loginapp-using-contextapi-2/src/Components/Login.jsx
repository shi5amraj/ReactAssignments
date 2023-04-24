import { useContext } from "react";
import { useState } from "react";
import  { AuthContext } from "./Context";
import "./Nav.css";

function Login()
{
 const [user,setUser]= useState({
  userName:"",
  password:""

 });
 
 const {setUserName,setIsLoggedIn}= useContext(AuthContext);



  const check=()=>
  {
   if((user.userName==="shivam" && user.password==="shivam@123")|| (user.userName==="admin" && user.password==="admin@123"))
   {
    setIsLoggedIn(true);
    setUserName(user.userName);


   }
   else{
    alert("Please Enter Correct Credentials");
   }


  }

    return (
  <div className="cardDiv">
   <h1>Login Page</h1>
   <div className="login-container">
   <div>
    <label htmlFor="">User Name:</label>
    <input type="text" name="" id="username"  onChange={(e)=>{ setUser({
     ...user,
     userName:e.target.value

    }) }}/>
   </div>
   <div>
    <label htmlFor="">Password:</label>
    <input type="password" name="" id="password" onChange={(e)=>{ setUser(
     {
      ...user,
      password:e.target.value
     }

    ) }} />
   </div>
   <div>
    <button onClick={check} >Log in</button>
   </div>
   </div>
  </div>

    )

}
export default Login;