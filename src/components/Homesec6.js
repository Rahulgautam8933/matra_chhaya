import React from 'react'

import img1 from './img/sec6img1.png'
import img2 from './img/gi12.png'
import img3 from './img/live.png'
import Donation from './Donation'

function Homesec6() {
  return (
    <>
    <div className="homesec42">
    
    <div className="homesec6container">
    <div className="homesec6boxs">
    <h1 className='homesec6boxsh1'>We love to help all the People that have problems in the world. After 5 years we have many goals achieved.</h1>
    <hr />
    </div>
    <div className="homesec6boxs">

    <div className="homesec6boxcontainer">
    <div className="homesec6box">
    <div className="homesec6boximg">
    <img src={img1} alt="img" />
    </div>
    <h1>20</h1>
    <p>Volunteership</p>
    
    </div>
    <div className="homesec6box">
    <div className="homesec6boximg" id='homesec6boximg1'>
    <img src={img3} alt="img" />
    </div>
    <h1>100</h1>
    <p>Livelihood enhancement</p>
    
    </div>
    <div className="homesec6box">
    <div className="homesec6boximg" id='homesec6boximg'>
    <img src={img2} alt="img" />
    </div>
    <h1>60</h1>
    <p>Poor girl marriage</p>
    
    </div>
   
    </div>
    </div>
    

    </div>
    
    </div>

  {/* <Donation/> */}
    
    </>
  )
}

export default Homesec6
