import React from "react";

import logoimg1 from "./img/online.png";
import logoimg2 from "./img/dance2.png";
import logoimg3 from "./img/volun.png";


function Homesetion2() {
  return (
    <div>
      {/* <div className="homesec2container">
        <div className="homesec2cards">
          <div className="homesec2card">
            <div className="homesec2cardimg">
              <img src={logoimg1} alt="logo" />
            </div>
            <h3>Online Conference</h3>
            <p>
              The conference can focus on different themes like education,
              healthcare, entrepreneurship, leadership, and advocacy, and invite
              speakers who are experts in their respective fields to share their
              knowledge and insights.
            </p>
          </div>
          <div className="homesec2card">
            <div className="homesec2cardimg" id="homesec2cardimg">
              <img src={logoimg2} alt="logo" />
            </div>
            <h3>Dance and music</h3>
            <p>
              Dance and music can help women to break free from traditional
              gender roles and stereotypes, and encourage them to explore their
              creativity and leadership potential.
            </p>
          </div>
          <div className="homesec2card" id="homesec2card">
            <div className="homesec2cardimg">
              <img src={logoimg3} alt="logo" />
            </div>
            <h3>Become a Volunteer</h3>
            <p>
              Become a volunteering for a women empowerment NGO can be a
              meaningful and enriching experience that allows you to contribute
              to a cause you believe in and make a positive
              difference in the world.
            </p>
          </div>
        </div>
      </div> */}

      <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                yha
                <span class="b-class-secondary"> koi Heading </span>Add kr lena
              </h2>
            </div>
          </div>
          <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  {/* <i class="fa-solid fa-chart-line"></i> */}
                  <div className="homesec2cardimg">
                    <img src={logoimg3} alt="logo" />
                  </div>
                </div>
                <h3>Online Conference</h3>
                <p>
                  The conference can focus on different themes like education,
                  healthcare, entrepreneurship, leadership, and advocacy, and
                  invite speakers who are experts in their respective fields to
                  share their knowledge and insights.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  {/* <i class="fa-solid fa-arrows-down-to-people"></i> */}
                  <div className="homesec2cardimg" id="homesec2cardimg">
                    <img src={logoimg2} alt="logo" />
                  </div>
                </div>
                <h3>Dance and music</h3>
                <p>
                  Dance and music can help women to break free from traditional
                  gender roles and stereotypes, and encourage them to explore
                  their creativity and leadership potential.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  {/* <i class="fa-solid fa-globe"></i> */}
                  <div className="homesec2cardimg">
                    <img src={logoimg3} alt="logo" />
                  </div>
                </div>
                <h3>Become a Volunteer</h3>
                <p>
                  Become a volunteering for a women empowerment NGO can be a
                  meaningful and enriching experience that allows you to
                  contribute to a cause you believe in and make a positive
                  difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homesetion2;
