import Button from "./Button"

const Navabar =() =>{
    let navbar = {
        width : '100%',
        // marginLeft : "100px",
        backgroundColor : "black",
        color : "white",
        // borderRadius : "10px",
    }

    let nav = {
        width : "60%",
        height : "50px",
        marginLeft  :"200px",
      
        display : "flex",
        justifyContent : "space-around",
        flexDirection : "row",
        alignItems : "center",
        fontSize : "800",
        fontWeight : "800"

    }
    return(
        <div style = {navbar}>
            <div style = {nav}>
                <p>Home</p>
                <p>Users</p>
                <p>Contact Us</p>
                <Button text = "Sign-Up"/>
                <Button text = "Register"/>
            </div>
        </div>
    )

}
export default Navabar