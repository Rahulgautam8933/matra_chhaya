import React from 'react'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>

    <Helmet>
    <title>Connect with Us: Matra Chhaya Seva Sansthan NGO - Get in Touch for Support and Collaboration</title>
    <meta
      name="description"
      content="Matra Chhaya Seva Sansthan NGO's contact page: Reach out to us for inquiries, support, and collaborations. We are here to make a positive impact! #NishuWelfareNGO"
     
    />
    <link rel="canonical" href="/contact" />
    </Helmet>

     <div className="contactcontaner">
     
     <div className="contactheader">
     <h1>Contact</h1>
     </div>


     <div className="contactformcontainer">
     
     <div className="contactformbox">
     <h1>Get In touch with us</h1>
     <p>For any grievance, suggestions and queries kindly write to us.</p>
     <div className="contactlinks">
     <div className="footerlinks">
     <li><a href="https://www.facebook.com/nishuwelfare/"><i class="zmdi zmdi-facebook"></i></a></li>
     <li><a href="https://www.instagram.com/gunjan.verma.180/?hl=en"><i class="zmdi zmdi-instagram"></i></a></li>
     <li><a href="https://twitter.com/NishuWelfare"><i class="zmdi zmdi-twitter"></i></a></li>
     <li><a href="/"><i class="zmdi zmdi-youtube-play"></i></a></li>
     
     </div>
     
     </div>

     <div className="footercontact">

<div className="footercontactlogo">
<i class="zmdi zmdi-phone"></i><span> +91 9935335352, 8052687777</span>
</div>
<div className="footercontactlogo">
<i class="zmdi zmdi-email"></i><span> matrichhayasewashansthan@gmail.com</span>
</div>
<div className="footercontactlogo">
<i class="zmdi zmdi-pin"></i><span> ASA 6/121 -C-5 Ashapur ,pahadiya near ashok tiraha varanasi UP 221007</span>
</div>
</div>
     </div>
     <div className="contactformbox">
     

<div className="contactform1">

<form action="">

<div className="contactforminput">
<input type="text" placeholder='Name' />

</div>
<div className="contactforminput">
<input type="email" placeholder='Email' />

</div>
<div className="contactformtextarea">
<textarea name="" id=""  rows="6" placeholder='Message'></textarea>

</div>
<div className="contactbutton">
<button> Contact Us</button>
</div>
</form>
</div>


     </div>

     </div>
     
     </div>


     <div className="contactmapcontainer">
     <div className="contactmap">

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0866093291434!2d80.98584451504469!3d26.90074628313279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999581d9a76a2ed%3A0x26f6ab6399bd6fd6!2sMayur%20Residency%2C%20Faridi%20Nagar%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1682360018287!5m2!1sen!2sin" width="1200" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     
     </div>
     
     
     </div>

    </>
  )
}

export default Contact
