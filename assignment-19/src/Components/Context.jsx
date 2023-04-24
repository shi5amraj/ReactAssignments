import {useState,createContext} from "react";


export const Allcontext= createContext();

function CustomProvider({children})
{
    const [cart,setCart]=useState([]);


    return <Allcontext.Provider value={{cart,setCart}}>{children}</Allcontext.Provider>


}
export default CustomProvider;
