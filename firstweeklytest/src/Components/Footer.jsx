function Footer(){
    return(
        <div style  = {{marginLeft : "0px",width  :"740px",height  :"250px",backgroundColor : "black",margin : "12px",padding  : "30px",borderRadius : "5px"}}>
            <div style = {{color : "white",display  :"flex",justifyContent  :"space-around",flexDirection : "row",marginLeft : "-50px"}}>
            <h5>About flex Bussiness Pro</h5>
            <h5>Recent Photos</h5>
            <h5>Galleries</h5>
            </div>
    <div style = {{width  :"800px",height : "200px",display  :"flex",justifyContent : "space-evenly",flexDirection : "row",alignItems  :"center",marginLeft : "-30px",color : "white"}}>
            
            
                <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.<br /> Reprehenderit earum nesciunt <br />esse, maxime iusto laboriosam<br /> distinctio nisi quis ipsam amet,<br /> praesentium voluptatum et ex <br />cum ipsa suscipit debitis <br />exercitationem magnam!</p>
                <p>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit.<br /><br /> Ratione tempore saepe quam corporis<br /> ex consequatur repellat provident<br /><br /> deleniti, iure voluptates expedita<br /> perferendis a, atque nemo.</p>
                <img  src = "https://images.wsj.net/im-320358/?width=860&height=573" width = "150px" height ="150px"/>
                {/* </div> */}

            </div>

        </div>
    )
}
export default Footer;