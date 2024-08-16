import React, { useState } from 'react'

import m1 from './img/t.jpg'
import m2 from './img/t.jpg'
import m3 from './img/t.jpg'
import m4 from './img/t.jpg'
import m5 from './img/t.jpg'
import m6 from './img/t.jpg'
import m7 from './img/t.jpg'
import m8 from './img/t.jpg'
import m9 from './img/t.jpg'



import pic1 from './img/t.jpg'
import pic2 from './img/t.jpg'
import pic4 from './img/t.jpg'
import pic5 from './img/t.jpg'
import pic6 from './img/t.jpg'
import pic7 from './img/t.jpg'
import pic8 from './img/t.jpg'
import pic9 from './img/t.jpg'
import pic10 from './img/t.jpg'
import pic11 from './img/t.jpg'
import pic12 from './img/t.jpg'

import se1 from './img/t.jpg'
import se2 from './img/t.jpg'
import se3 from './img/t.jpg'
import se4 from './img/t.jpg'
import se5 from './img/t.jpg'
import se6 from './img/t.jpg'


import pic13 from './img/pic17.jpg'
import pic14 from './img/pic17.jpg'
import pic15 from './img/pic17.jpg'
import pic16 from './img/pic17.jpg'
import pic17 from './img/pic17.jpg'
import pic18 from './img/pic17.jpg'
import pic19 from './img/pic17.jpg'
import pic20 from './img/pic17.jpg'
import pic21 from './img/pic17.jpg'
import s1 from './img/t.jpg'
import s2 from './img/t.jpg'
import s3 from './img/t.jpg'
import s4 from './img/t.jpg'
import s5 from './img/t.jpg'
import s6 from './img/t.jpg'
import { Helmet } from 'react-helmet-async'





function Gallary() {



  let data =[
    {
      id:1,
      imgSrc:m1,
    },
    {
      id:2,
      imgSrc:m2,
    },
    {
      id:3,
      imgSrc:m3,
    },
    {
      id:4,
      imgSrc:m4,
    },
    {
      id:5,
      imgSrc:m5,
    },
    {
      id:6,
      imgSrc:m6,
    },
    {
      id:7,
      imgSrc:m7,
    },
    {
      id:8,
      imgSrc:m8,
    },
    {
      id:9,
      imgSrc:m9,
    }
   
  ]

  let data1 =[
    {
      id:1,
      imgSrc:pic4,
    },
    {
      id:2,
      imgSrc:pic5,
    },
    {
      id:3,
      imgSrc:pic6,
    },
    {
      id:4,
      imgSrc:pic7,
    },
    {
      id:5,
      imgSrc:pic8,
    },
    {
      id:6,
      imgSrc:pic9,
    },
    {
      id:7,
      imgSrc:pic10,
    },
    {
      id:8,
      imgSrc:pic11,
    },
    {
      id:8,
      imgSrc:pic12,
    },
    
    
   
   
  ]
  let data2 =[
    {
      id:1,
      imgSrc:s1,
    },
    {
      id:2,
      imgSrc:s2,
    },
    {
      id:3,
      imgSrc:s3,
    },
    {
      id:4,
      imgSrc:s4,
    },
    {
      id:5,
      imgSrc:s5,
    },
    {
      id:6,
      imgSrc:s6,
    },
   
    
   
    
    
   
   
  ]
  let data3 =[
    {
      id:1,
      imgSrc:se1,
    },
   
    {
      id:2,
      imgSrc:se2,
    },
   
    {
      id:3,
      imgSrc:se3,
    },
   
    {
      id:4,
      imgSrc:se4,
    },
   
    {
      id:5,
      imgSrc:se5,
    },
   
    {
      id:6,
      imgSrc:se6,
    },
   
    
   
   
  ]

  const [model, setmodel] = useState(false);
  const [tempimgsrc, setTempImgSrc] = useState('');


  const getImg = (imgSrc) => {

    setTempImgSrc(imgSrc);
    setmodel(true);

}



  return (
    <>
    <Helmet>
    <title>Moments of Impact: Matra Chhaya Seva Sansthan NGO - Inspiring Images of Our Journey</title>
    <meta
      name="description"
      content="Matra Chhaya Seva Sansthan: An inspiring gallery showcasing stories of empowerment, resilience, and success achieved through our women-centric initiatives. Changing lives, one story at a time."
     
    />
    <link rel="canonical" href="/gallery" />
    </Helmet>



    <div className={model ? "model open" : "model"}>

    <div className="modelimgcontainer">
        <img src={tempimgsrc} alt="" />

        <h1 onClick={() => setmodel(false)} ><i class="zmdi zmdi-close"></i></h1>
    </div>
    </div>


      <div className="gallarycontainer">



        <div className="gallarycrausel">


          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active gallaryimgcon">
                <img class="d-block w-100" src={pic1} alt="First slide" />
              </div>
              <div class="carousel-item gallaryimgcon ">
                <img class="d-block w-100" src={pic2} alt="Second slide" />
              </div>
              <div class="carousel-item gallaryimgcon ">
                <img class="d-block w-100" src={pic4} alt="Third slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


        </div>


{/* 
        <div className="gallarysection2">
          <h1>Video clips</h1>
          <hr />
          <div className="videoclipcontainer">
            <div className="videoclip1">
              <iframe width="585" height="300" src="https://www.youtube.com/embed/XyeuAMYrJ8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="videoclip1">
              <iframe width="585" height="300" src="https://www.youtube.com/embed/_XgdnbR3Cec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

          </div>
        </div> */}


        <div className="gallarysection3">
          <h1>Media Coverage</h1>
          <hr />




          <div className="projectcontainer">
          <div className="projectboxs">
            <div className="data">
              <div className="gallarycontainer1">
                <div className="gallarybox12">
                  {data.map((item, index) => {
                    return (
                      <div className="piccontainer" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>






       
        
       
        </div>

        <div className="gallarysection3">
          <h1>Cultural Events</h1>
          <hr />



          
          <div className="projectcontainer">
          <div className="projectboxs">
            <div className="data">
              <div className="gallarycontainer1">
                <div className="gallarybox12">
                  {data1.map((item, index) => {
                    return (
                      <div className="piccontainer" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>



    
        </div>

        <div className="gallarysection3">
          <h1>Social work</h1>

          <hr />


 
          <div className="projectcontainer">
          <div className="projectboxs">
            <div className="data">
              <div className="gallarycontainer1">
                <div className="gallarybox12">
                  {data2.map((item, index) => {
                    return (
                      <div className="piccontainer" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
          

         
         
         
        </div>

        <div className="gallarysection3">
          <h1>Services</h1>

          <hr />



           
          <div className="projectcontainer">
          <div className="projectboxs">
            <div className="data">
              <div className="gallarycontainer1">
                <div className="gallarybox12">
                  {data3.map((item, index) => {
                    return (
                      <div className="piccontainer" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" />
                      </div>
                    )
                  })}
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

export default Gallary
