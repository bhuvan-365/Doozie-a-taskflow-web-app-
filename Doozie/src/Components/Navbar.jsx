import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from '../images/nobg-logo.webp';


const Navbar = () => {
  return (
    <>

      <div>
        <nav>
       <img src={logo} alt="Logo" />
          <ul>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/"> <li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/addlist"><li>Add list</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/history"><li>History</li></NavLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
