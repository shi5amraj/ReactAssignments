

import '../Components/Navbar.css';
function Navbar(){
    return <div className='navbar'>
        <div className='heading'>
            <h2 >Flex Bussiness Pro</h2>
            <p >Clean and Mountain Business Theme</p>
        </div>
        <div className='nav'>
            <p style = {{color : "blue"}}>Home</p>
            <p>About Us</p>
            <p>Styleguide</p>
            <p>Blog</p>
            <p>Contact Us</p>

        </div>

    </div>
}
export default Navbar;