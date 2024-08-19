import React from 'react'
import navlogo from './img/logo.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
     <div className="footercontainer">
     <div className="footerboxs">
     <div className="footerlogo">
     <img src={navlogo} alt="" />
     </div>
     <div className="footercontant">
    
     <p>Our mission is to empower women through education and training, and we achieve this by offering a variety of courses in sewing and embroidery. Our programs are designed to cater to women of all ages and backgrounds, whether they are beginners or experienced seamstresses.</p>
    
     </div>
     <div className="footerlinks">
     <li><a href="https://www.facebook.com/nishuwelfare/"><i class="zmdi zmdi-facebook"></i></a></li>
     <li><a href="https://www.instagram.com/gunjan.verma.180/?hl=en"><i class="zmdi zmdi-instagram"></i></a></li>
     <li><a href="https://twitter.com/NishuWelfare"><i class="zmdi zmdi-twitter"></i></a></li>
     <li><a href="/"><i class="zmdi zmdi-youtube-play"></i></a></li>
     
     </div>
     </div>
     <div className="footerboxs">

     
<div className="footerlogo">
<h2>Useful Links</h2>
</div>

<p><a href="/">Home </a></p>
<p><a href="/about">About Us </a></p>
<p><a href="/ourcauses">Our Causes</a></p>
<p><a href="/gallery">Gallery </a></p>
<p><a href="/team">Team </a></p>
<p><a href="/contact">Contact Us </a></p>

</div>



    
     <div className="footerboxs">

     
<div className="footerlogo">
<h2>Contact</h2>
</div>
<div className="footercontact">

<div className="footercontactlogo">
<i class="zmdi zmdi-phone"></i><span> +91 9935335352, 8052687777</span>
</div>
<div className="footercontactlogo">
<i class="zmdi zmdi-email"></i><span>matrichhayasewashansthan@gmail.com</span>
</div>
<div className="footercontactlogo">
<i class="zmdi zmdi-pin"></i><span> ASA 6/121 -C-5 Ashapur ,pahadiya near ashok tiraha varanasi UP 221007 </span>
</div>
</div>

<div className="footersearch">

<input type="text"placeholder='Enter your eamil' />
<button>Send</button>

</div>


     </div>


   
     
     </div> 
     <div className="footerpara">
     
     <p className='m-0'><span><NavLink to="/policies">privacy Policies</NavLink></span> . <span><NavLink to="/policies"> terms & condition</NavLink></span></p>
     </div>

     
    </>
  )
}

export default Footer
