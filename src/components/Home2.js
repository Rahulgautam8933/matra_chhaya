import React, { useState } from "react";

import hm1 from "./img/image1.jpg";
import hm2 from "./img/image1.jpg";
import hm3 from "./img/t.jpg";
import Payment from "./Payment";
import { NavLink } from "react-router-dom";

function Home2() {
  const [showModal, setModel] = useState(false);

  const closeModel = () => setModel(false);

  return (
    <>
      {/* <div id="home21">
        <div className="home21">

          <div className="home2container">
            <div className="home2imgback"></div>
            <div className="home2boxs">
              <div className="home2box">
                <div className="home2contentbox">
                  <h5>Donate</h5>
                  <h6>4 a better world</h6>
                  <p>
                    Your small effort today can make a world of difference for a
                    woman in need.
                  </p>
                  <div className="home2button">
                    <button onClick={() => setModel(true)}>Donate Now</button>
                    <button id="homereadmorebutton">
                      <NavLink to="/about"> read more</NavLink>
                    </button>
                    {showModal && <Payment close={closeModel} />}
                  </div>


                </div>
              </div>
              <div className="home2box">
                <div className="home2imgs">
                  <div className="home2img" id="home2img1">
                    <img
                      src={hm1}
                      alt="Matra Chhaya Seva Sansthan Foundation NGO "
                    />
                  </div>
                  <div className="home2img" id="home2img2">
                    <img
                      src={hm2}
                      alt="Matra Chhaya Seva Sansthan Foundation NGO "
                    />
                  </div>
                  <div className="home2img" id="home2img3">
                    <img
                      src={hm3}
                      alt="Matra Chhaya Seva Sansthan Foundation NGO "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="pb-3">
        <section class="container my-4">
          <div class="row align-items-center">
            {/* <!-- Right Part: Image Slider (Visible on top in mobile) --> */}

            <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <div id="imageSlider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://via.placeholder.com/600x400"
                      class="d-block w-100"
                      alt="Slide 1"
                    />

                    {/* <img src="" alt="" /> */}
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://via.placeholder.com/600x400"
                      class="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://via.placeholder.com/600x400"
                      class="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#imageSlider"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#imageSlider"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div class="col-md-6 order-2 order-md-1">
              <div className="home2contentbox">
                <h5>
                  <span
                    style={{
                      fontSize: "4rem",
                      fontWeight: 700,
                      color: "rgb(22 22 74)",
                    }}
                  >
                    Donate
                  </span>
                </h5>
                <h6>
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "rgb(255 143 0)",
                    }}
                  >
                    4
                  </span>{" "}
                  <i> A Better World.</i>
                </h6>
                <p>
                  Your small effort today can make a world of difference for a
                  woman in need.
                </p>
                <div className="home2button">
                  <button
                    onClick={() => setModel(true)}
                    style={{
                      backgroundColor: "rgb(22 22 74)", // Button background color
                      color: "white", // Text color
                      padding: "10px 20px", // Padding around the text
                      border: "none", // Remove default border
                      borderRadius: "8px", // Rounded corners
                      cursor: "pointer", // Change cursor to pointer on hover
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                      fontSize: "16px", // Increase font size
                      fontWeight: "bold", // Bold text
                      transition:
                        "background-color 0.3s ease, transform 0.2s ease", // Smooth transition on hover
                    }}
                  >
                    Donate Now
                  </button>
                  {/* <button
                  id="homereadmorebutton"
                  style={{ backgroundColor: "rgb(255 143 0)" }}
                >
                  <NavLink to="/about"> Read More</NavLink>
                </button> */}
                  <button
                    id="homereadmorebutton"
                    style={{
                      backgroundColor: "rgb(255, 143, 0)", // Button background color
                      color: "white", // Text color
                      padding: "10px 20px", // Padding around the text
                      border: "none", // Remove default border
                      borderRadius: "8px", // Rounded corners
                      cursor: "pointer", // Change cursor to pointer on hover
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                      fontSize: "16px", // Increase font size
                      fontWeight: "bold", // Bold text
                      transition:
                        "background-color 0.3s ease, transform 0.2s ease", // Smooth transition on hover
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "rgb(255, 123, 0)")
                    } // Hover effect
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "rgb(255, 143, 0)")
                    }
                  >
                    <NavLink
                      to="/about"
                      style={{
                        color: "inherit", // Inherit color from the button
                        textDecoration: "none", // Remove underline from the link
                      }}
                    >
                      Read More
                    </NavLink>
                  </button>
                  {showModal && <Payment close={closeModel} />}
                </div>
              </div>
              {/* <h2>Your Heading Here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home2;
