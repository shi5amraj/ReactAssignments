import React from "react";


const UserTable =({userdata}) =>{

    let table = {
        width : "100%",
        
        // margin : "50px auto",
        backgroundColor : "black",
        color : 'white',
        borderRadius : "10px",
        margin : '10px',
        padding : "10px"
    }
    let tablebody = {
        boxShadow : "0 0 20px black",
    }
    return(
        <div>
             <table cellPadding={10} style = {{margin : "10px auto"}}>
    <thead style = {table}>
        <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>City</th>
        </tr>
    </thead>
   
    <tbody align="center" style = {tablebody}>

   {
   userdata.map((ele)=>{
    return<tr>
        <td><img src={ele.picture.thumbnail}alt="" /></td>
        <td>{ele.name.first}</td>
        <td>{ele.gender}</td>
        <td>{ele.email}</td>
        <td>{ele.location.city}</td>
   
     
    </tr>

   })
}
</tbody>
</table>
        </div>
    )

}
export default UserTable;