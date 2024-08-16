import React, { useState } from 'react'
import causes from './img/t.jpg'
import causes1 from './img/t.jpg'
import water from './img/t.jpg'
import water1 from './img/t.jpg'
import water2 from './img/t.jpg'
import causesimg from './img/t.jpg'
import Payment from './Payment';
import { Helmet } from 'react-helmet-async'
function OurCauses() {

  const [showModal, setModel] = useState(false);

  const closeModel = ()=>setModel(false);


  return (
    <>

    <Helmet>
    <title>Creating Change: Matra Chhaya Seva Sansthan NGO - Championing Causes for a Better World</title>
    <meta
      name="description"
      content="Matra Chhaya Seva Sansthan: Championing causes for women empowerment, including education, skill development, healthcare, and gender equality. Empowering women, transforming societies."
     
    />
    <link rel="canonical" href="/ourcauses" />
    </Helmet>


      <div className="causescontaner">
        <div className="contactheader">
          <h1>Our Causes</h1>
        </div>

        <div className="causescontanerboxs">
        
        <div className="causesrasemoney">
        <div className="causescontainerbox">
            <div className="causesboximg">
              <img src={causes} alt="Food distribution" />
            </div>
            <div className="causesboxcontent">
              <h3>Fundraiser for Women</h3>
             
              <p>Your small effort today can make a world of difference for a woman in need.</p>
              <div className="causesbutton">
              <button onClick={()=>setModel(true)} >Donate Now</button>
              {showModal && <Payment close ={closeModel}/>}
             </div>
            </div>



          </div>


          <div className="progress3">
          
          <div className="donationprogressbar">
          <div class="donationskilbox">
           
            <div className="donationskillbar">
            
            <span className='skill-per1'>
            <span className='tooltips1'>75%</span>
            </span>
            
            </div>


          </div>
        </div>
          
          </div>

         

        <div className="homesec4rasegoal">
        <p>Raised:</p>
        <p>Goal: </p>
        </div>
        
        </div>
        <div className="causesrasemoney">
        <div className="causescontainerbox">
            <div className="causesboximg">
              <img src={causes1} alt="Fundraiser for kids" />
            </div>
            <div className="causesboxcontent">
              <h3>Fundraiser for kids</h3>
             
              <p>Your small effort today can make a world of difference for a woman in need.</p>
              <div className="causesbutton">
              <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
              {showModal && <Payment close ={closeModel}/>}
             </div>
            </div>



          </div>
          <div className="progress3">
          
          <div className="donationprogressbar">
          <div class="donationskilbox">
           
            <div className="donationskillbar">
            
            <span className='skill-per1'>
            <span className='tooltips1'>68%</span>
            </span>
            
            </div>


          </div>
        </div>
          
          </div>

        <div className="homesec4rasegoal">
        <p>Raised:</p>
        <p>Goal: </p>
        </div>
        
        </div>
          
         

        </div>


        <div className="causessec3container">
        
        <div className="causessec3boxs">
        <div className="causessec3box">
        <div className="causessec3img">
        <img src={water} alt="traning in swing and embroidery" />
        <div className="causeshoverbutton">
        <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
       </div>



        
        </div>
        <div className="causessec3content">
        <h3>Bring happyness to all</h3>

        <p>1. Advocating for women right <br /> 2. Personal hygine <br />  3. Workshop for mental health</p>

        <div className="progress3">
          
          <div className="donationprogressbar">
          <div class="donationskilbox">
           
            <div className="donationskillbar">
            
            <span className='skill-per1'>
            <span className='tooltips1'>55%</span>
            </span>
            
            </div>


          </div>
        </div>
          
          </div>

      <div className="homesec4rasegoal">
      <p>Raised:</p>
      <p>Goal: </p>
      </div>
        
        </div>
        </div>
        <div className="causessec3box">
        <div className="causessec3img">
        <img src={water1} alt="child education" />
        <div className="causeshoverbutton">
        <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
       </div>
        </div>
        <div className="causessec3content">
        <h3>Education for all</h3>

        <p>1. Education for all Girl child, old age woman, <br />
        </p>
        <br />
        <br />
        

        


        <div className="progress3">
          
          <div className="donationprogressbar">
          <div class="donationskilbox">
           
            <div className="donationskillbar">
            
            <span className='skill-per1'>
            <span className='tooltips1'>58%</span>
            </span>
            
            </div>


          </div>
        </div>
          
          </div>

      <div className="homesec4rasegoal">
      <p>Raised:</p>
      <p>Goal: </p>
      </div>
        
        </div>
        </div>
        <div className="causessec3box">
        <div className="causessec3img">
        <img src={water2} alt="food distribution" />
        <div className="causeshoverbutton">
        <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
       </div>
        </div>
        <div className="causessec3content">
        <h3>Livelyhood</h3>

        <p>1. Lorem ipsum dolor sit amet consectetur <br /> 2. adipisicing elit. Facilis exercitationem <br />  3. quibusdam cumque.</p>

        <div className="progress3">
          
        <div className="donationprogressbar">
        <div class="donationskilbox">
         
          <div className="donationskillbar">
          
          <span className='skill-per1'>
          <span className='tooltips1'>60%</span>
          </span>
          
          </div>


        </div>
      </div>
        
        </div>

      <div className="homesec4rasegoal">
      <p>Raised:</p>
      <p>Goal: </p>
      </div>
        
        </div>
        </div>
        
        </div>
        
        </div>


        <div className="causessec4contaner">
        <div className="causessec4boxs">
        <div className="causessec4box">
        <h1>We love to help all the People that have problems in the world. After 5 years we have many goals achieved.</h1>
        <p>Your small effort today can make a world of difference for a kids in need.</p>

        <div className="progress3">
          
          <div className="donationprogressbar">
          <div class="donationskilbox">
           
            <div className="donationskillbar">
            
            <span className='skill-per1'>
            <span className='tooltips1'>62%</span>
            </span>
            
            </div>


          </div>
        </div>
          
          </div>

      <div className="homesec4rasegoal">
      <p>Raised:</p>
      <p>Goal: </p>
      </div>


            <div className="causessec4button">
            <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
            {showModal && <Payment close ={closeModel}/>}
           </div>  
        </div>
        <div className="causessec4box">
         <img src={causesimg} alt="donate for poor child" />
        </div>
        </div>
        
        </div>


      </div>
    </>
  )
}

export default OurCauses
