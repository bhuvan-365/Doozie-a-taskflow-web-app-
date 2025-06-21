import React, { useState } from 'react'; import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from '../images/nobg-logo.webp';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handelham = () => {
    setMenuOpen(!menuOpen);

  }

  return (
    <>

      <div >
        <nav style={{ position: 'relative' }}>
          <img src={logo} alt="Logo" />

          <div className="menu-icon" onClick={handelham} > {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
              <path d="M20 12L10 12" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M20 5L4 5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              </path>
              <path d="M20 19L4 19" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>

          )}</div>

          <ul style={{ right: menuOpen ? "0" : "-100%" }}>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/"> <li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/addlist"><li>Add list</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/history"><li>History</li></NavLink>
          </ul>
        </nav >
      </div >
    </>
  )
}

export default Navbar
