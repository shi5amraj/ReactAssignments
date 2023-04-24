
import {useContext} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../Components/Context"


function ProtectedRoute({children})
{
    const {isLoggedIn}= useContext(AuthContext);
    
    console.log("consoling in protection  "+isLoggedIn)

 if(isLoggedIn)
 {
    return children;
    
    
 }
 else
 {
    return <Navigate to="/"/>
 }





}
export default ProtectedRoute