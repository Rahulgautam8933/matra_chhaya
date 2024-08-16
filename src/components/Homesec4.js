import React, { useState } from 'react'
import event1 from './img/t.jpg'
import event2 from './img/t.jpg'
import event3 from './img/t.jpg'
import event4 from './img/t.jpg'
import event5 from './img/achive5.jpg'

import featureimg from './img/t.jpg'
import Payment from './Payment';
function Homesec4() {

  const [showModal, setModel] = useState(false);

  const closeModel = ()=>setModel(false);


  return (
    <>

      <div className="homesec4container">

        <div className="homesec4cards">
          <div className="homesec4card">
            <h1>Achievments</h1>
            <hr />

            <div className="homesec4events">
             <div className="homesec4boxs1">
             
             <div className="homesec4box1">
             <img src={event1} alt="img" />
             </div>
             <div className="homesec4box1">
             <img src={event2} alt="img" />
             </div>
             
             
             

             </div>
             <div className="homesec4boxs1">
             <div className="homesec4box1">
             <img src={event3} alt="img" />
             </div>
             <div className="homesec4box1">
             <img src={event4} alt="img" />
             </div>

             </div>
            
            </div>
           

          </div>
          <div className="homesec4card">
            <h1>Featured Cause</h1>
            <hr />
            <div className="homesec4donationrange">
            <div className="homesec4featurebox">

            <div className="homesecfeatureimg feimg">
              <img src={featureimg} alt="Happy faces" />
            </div>

            <div className="homesecfeatureimg">
              <h4>Fundraiser for Women</h4>

              <p className='homesec4p'>Your small effort today can make a world of difference for a woman in need.</p>

              <div className="homesec4dontatebutton">
              
              <button onClick={()=>setModel(true)}><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
        </div>


              

            </div>

            

          </div>

          <div className="donationbox23">
          
          
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
         
            
            </div>
           
           


          </div>
        </div>

      </div>
    </>
  )
}

export default Homesec4
