import { NavLink } from "react-router-dom"

function Nav(){
    return (
       <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>
       </ul>
    )
}

export default Nav