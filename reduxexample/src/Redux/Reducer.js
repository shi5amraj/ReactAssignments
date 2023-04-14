

var initialData={
name: "Kumar shivam"

}

const basicReducer=(storeData=initialData,action)=>
{
if(action.type==="name")
{
    return{
        name:action.userName
    };
}

return storeData;
}

export  default basicReducer;