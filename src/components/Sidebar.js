import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar({sidebar, closeback}) {
  return (
    <>

    <div className={sidebar?"sidebar sidebaropen":"sidebar"}>
    <div className="profile">
     

    </div>
    <div className="homelinks"  >
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/" >
      Home
    </NavLink>
  </li>
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/about" >
      About Us
    </NavLink>
  </li>
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/ourcauses" >
    Our Causes
    </NavLink>
  </li>
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/gallery" >
    Gallery
    
    </NavLink>
  </li>
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/team" >
    Team
    
    </NavLink>
  </li>
    <li onClick={closeback}  className="nav-item ">
    <NavLink className="nav-link " to="/contact" >
    Contact Us
    </NavLink>
  </li>

    </div>

   
  </div>


      
    </>
  )
}

export default Sidebar
