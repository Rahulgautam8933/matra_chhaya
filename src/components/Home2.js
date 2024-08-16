import React, { useState } from 'react'

import hm1 from './img/image1.jpg'
import hm2 from './img/image1.jpg'
import hm3 from './img/t.jpg'
import Payment from './Payment';
import { NavLink } from 'react-router-dom';

function Home2() {

    const [showModal, setModel] = useState(false);

    const closeModel = ()=>setModel(false);
  


    return (
        <>
        <div id="home21">
        <div className="home21">

<div className="home2container">
<div className="home2imgback"></div>
    <div className="home2boxs">
        <div className="home2box">
            <div className="home2contentbox">
                <h5>Donate</h5>
                <h6>4 a better world</h6>
                <p>Your small effort today can make a world of difference for a woman in need.</p>
                <div className="home2button">
                <button onClick={()=>setModel(true)} >Donate Now</button>
                <button id='homereadmorebutton' ><NavLink to="/about"> read more</NavLink></button>
                {showModal && <Payment close ={closeModel}/>}</div>
            </div>

        </div>
        <div className="home2box">
        
            <div className="home2imgs">

            
                <div className="home2img" id='home2img1'>
                    <img src={hm1} alt="Matra Chhaya Seva Sansthan Foundation NGO " />
                </div>
                <div className="home2img" id='home2img2'>
                    <img src={hm2} alt="Matra Chhaya Seva Sansthan Foundation NGO " />
                </div>
                <div className="home2img" id='home2img3'>
                    <img src={hm3} alt="Matra Chhaya Seva Sansthan Foundation NGO " />
                </div>

            </div>

        </div>
    </div>



</div>

</div>
        

        
        </div>


        </>
    )
}

export default Home2
