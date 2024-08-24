import React from 'react'

import navlogo from "./img/logo.png"
import { NavLink } from 'react-router-dom'
function Navbar({openSidebar}) {
  return (
    <>
   
    <div className="navbar ">
    
    <div className="navbarcontainer">
    
    
<div className="navbarlogo">
<img src={navlogo} alt="logo" />
<div className="navlogocardback"></div>
</div>

<div className="navbarlinkscontainer">

{/* <div className="navback">.</div> */}

<ul>

<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/about">About Us</NavLink></li>
<li><NavLink to="/ourcauses">Our Causes</NavLink></li>
<li><NavLink to="/gallery">Gallery</NavLink></li>
<li><NavLink to="/team">Team</NavLink></li>
<li><NavLink to="/contact">Contact Us</NavLink></li>
</ul>
</div>

<div className="navbarmenuicon"  onClick={openSidebar} >
<i class="zmdi zmdi-menu"></i>
</div>

    </div>
    </div>

    </>
  )
}

export default Navbar
