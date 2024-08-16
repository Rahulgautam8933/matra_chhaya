import React, { useState } from 'react'
import img1 from './img/p31.jpg'
import img2 from './img/p41.jpg'
import img3 from './img/p31.jpg'
import { NavLink } from 'react-router-dom'
import Payment from './Payment';
function Home() {

const [showModal, setModel] = useState(false);

const closeModel = ()=>setModel(false);


  return (
    <>
     
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img1} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <div className="carouselcontainer">
        
        <h5>Donate</h5>
        <h6>4 a better world</h6>
        <p>Your small effort today can make a world of difference for a woman in need.</p>
        <div className="carouselbutton">
        <button onClick={()=>setModel(true)} ><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
        <button><NavLink to="/about"> Read more </NavLink></button>
        </div>
        </div>
        
      </div>
      </div>
      <div class="carousel-item">
        <img src={img2} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <div className="carouselcontainer">
        
        <h5>Donate</h5>
        <h6>4 a better world</h6>
        <p>Some representative placeholder content for the first slide.</p>
        <div className="carouselbutton">
        <button onClick={()=>setModel(true)}><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
        <button><a href="/"> Read more </a></button>
        </div>
        </div>
        
      </div>
      </div>
      <div class="carousel-item carousel navbarimg">
        <img src={img3} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <div className="carouselcontainer">
        
        <h5>Donate</h5>
        <h6>4 a better world</h6>
        <p>Some representative placeholder content for the first slide.</p>
        <div className="carouselbutton">
        <button onClick={()=>setModel(true)}><a >Donate Now </a> </button>
        {showModal && <Payment close ={closeModel}/>}
        <button className='secondbutton'><a href="/"> Read more </a></button>
        </div>
        </div>
      </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


    </>
  )
}

export default Home
