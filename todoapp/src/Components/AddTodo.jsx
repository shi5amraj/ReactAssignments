import { useState } from "react"
import ShowTodo from "./ShowTodo"


function AddTodo()
{
    const [state,setState]= useState();
    const [todoItem,setTodoItem]=useState([]);

    let getvalue=(e)=>
    {
     setState(e.target.value)
    }

    var newItem={
  title:state,
  status:false


    }

    //In react we never update array and objects we just replace old array with new array by using spread operator
    function addItem()
    {
      setTodoItem([...todoItem,newItem])

    }

    const deleteItem=(index)=>
    {

    var filteredData=todoItem.filter((item,ind)=>
    {
        return index !== ind;
    });

    setTodoItem(filteredData);
    
    }
    const handleTogle=(index)=>
    {

      var newArray=  todoItem.map((elem,ind)=>
        {
            return index===ind?{...elem,status:!elem.status}:elem
            

        })
        setTodoItem(newArray);


    }



    return(
       <div>
        <h1>Todo Application</h1>
        <input type="text" value={state} name="" id="" placeholder="Enter Task" onChange={getvalue} />
        <button onClick={addItem}>Add Task</button>
        <ShowTodo todoItem={todoItem} deleteItem1={deleteItem} handleTogle1={handleTogle}/>

        </div>

    )


}

export default AddTodo