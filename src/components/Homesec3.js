import React from 'react'
import welcome from './img/t.jpg'
function Homesec3() {
  function onclick() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  return (
    <>

      <div className="homesec3container">

        <div className="homesec3cards">
          <div className="homesec3card">
            <h1>Wellcome to our Charity</h1>
            <hr />
            <p>Welcome to Matra Chhaya Seva Sansthan Foundation,Women empowerment (NGO) a non-profit organization dedicated to providing free training in sewing and embroidery to women in need. We believe that every woman deserves the opportunity to learn new skills and earn a livelihood for themselves and their families<span id="dots">...</span> <br /> <br />
              <span id='more'>At Matra Chhaya Seva Sansthan Foundation,Women empowerment (NGO) we understand that access to education and training is a fundamental right, which is why we offer our courses completely free of charge. We believe that financial barriers should not prevent women from pursuing their dreams and achieving their goals. </span> </p>
            <div className="homesec3button">
              <button onClick={onclick} id="myBtn"  >Read more</button>
            </div>
          </div>
          <div className="homesec3card">
            <img src={welcome} alt="Social welfare" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Homesec3
