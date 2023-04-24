import { useState } from "react";
import { createContext } from "react";

export const AuthContext= createContext();

  function CustomProvider({children})
{

    const [isLoggedIn,setIsLoggedIn]= useState(false);
    const [userName,setUserName]= useState();
    return(

<AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userName,setUserName}}>{children}</AuthContext.Provider>
)

}
export default CustomProvider;


