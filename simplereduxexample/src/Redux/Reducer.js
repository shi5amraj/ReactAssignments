

const initial={

    name:"Kumar Shivam"
}

const basicReducer= (storeData=initial,action)=>
{

    if(action.type==="name")
    {
        return{
            name:action.userName
        }
    }

    return storeData;


}
export default basicReducer;