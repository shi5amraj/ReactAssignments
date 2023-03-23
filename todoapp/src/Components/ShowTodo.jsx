

function ShowTodo({todoItem,deleteItem1,handleTogle1}){


return(

    <div>
        
        {
          todoItem.map((item,index)=>{

            return (
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>{item.title}</h3>
            <h3 style={{color:"red"}}>{item.status?"Completed":"Not Completed"}</h3>
            <button onClick={handleTogle1(index)}>Toggle</button>
            <button onClick={()=>{deleteItem1(index)}}>Delete</button>
            </div>
            
            );
          })


        }
      

    </div>
)


}
 export  default ShowTodo;