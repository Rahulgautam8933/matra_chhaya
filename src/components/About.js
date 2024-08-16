import React from 'react'
import welcome from './img/t.jpg'
import testi2 from './img/t.jpg'
import testi1 from './img/t.jpg'
import testi3 from './img/t.jpg'
import testi4 from './img/t.jpg'
import testi5 from './img/t.jpg'
import testi6 from './img/t.jpg'
import { Helmet } from 'react-helmet-async'

function About() {

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


      <Helmet>
        <title>Empowering Lives: Matra Chhaya Seva Sansthan NGO - Our Journey Towards Social Impact</title>
        <meta
          name="description"
          content="Matra Chhaya Seva Sansthan: Empowering women, supporting poor girls' marriages, education, and offering embroidery training. A dedicated NGO making a positive impact."

        />
        <link rel="canonical" href="/about" />

      </Helmet>




      <div className="aboutcontainer">

        <div className="contactheader">
          <h1>About</h1>
        </div>


        <div className="homesec3container1">

          <div className="homesec3cards">
            <div className="homesec3card" id='homesec3card'>
              <h1>Wellcome to our Charity</h1>
              <hr />
              <p>Welcome to Matra Chhaya Seva Sansthan Foundation,Women empowerment (NGO) a non-profit organization dedicated to providing free training in sewing and embroidery to women in need. We believe that every woman deserves the opportunity to learn new skills and earn a livelihood for themselves and their families. <br /> <br />
                At Matra Chhaya Seva Sansthan Foundation,Women empowerment (NGO) we understand that access to education and training is a fundamental right, which is why we offer our courses   <span id="dots">...</span> <span id="more">   completely free of charge. We believe that financial barriers should not prevent women from pursuing their dreams and achieving their goals. <br /> <br />
                  Our team of experienced trainers provides hands-on training to our students, giving them the practical skills and knowledge they need to succeed in the industry. We also provide job placement assistance to our graduates, helping them find employment opportunities and start their own businesses. <br /> <br />
                  Our training programs not only benefit the individual women, but also have a positive impact on their families and communities. By empowering women with the skills and knowledge they need to earn a living, we are helping to break the cycle of poverty and create a brighter future for all. <br /> <br />
                  If you are interested in learning more about our programs or would like to support our cause, please feel free to contact us. We welcome volunteers, donations, and partnerships with like-minded organizations. Together, we can make a difference in the lives of women and communities around the world.  </span> </p>
              <div className="homesec3button">
                <button onClick={onclick} id="myBtn">Read more</button>
              </div>
            </div>
            <div className="homesec3card">
              <img src={welcome} alt="img" />
            </div>
          </div>

        </div>


        <div className="aboutseccoutcontaner">














          <div className="section6mid">


            <section className="pt-5 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">

                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi2} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title"> श्रीमति आनंदी बेन पटेल</h4>
                                  <h6>( राज्यपाल, उत्तर प्रदेश )</h6>
                                  <p>"NGOs play a vital role in promoting social welfare and community development, and I commend their efforts to improve the lives of our citizens."</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi1} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title"> श्रीमती शांभवी सिंह </h4>
                                  <h6>( युवरानी अमेठी,  उत्तर प्रदेश )</h6>
                                  <p>" As an Amethi Yuvrani , I believe that “Matra Chhaya Seva Sansthan foundation” NGOs play a crucial role in uplifting the underprivileged sections of society. NGOs work tirelessly to provide education, healthcare, and other basic amenities to those who are unable to access them due to financial or social constraints. "</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi3} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title"> श्रीमती नम्रता पाठक</h4>
                                  <h6>( वरिष्ठ समाज सेविका, भाजपा नेत्री एवं धर्मपत्नी श्री ब्रजेश पाठक  उपमुख्यमंत्री ,  उत्तर प्रदेश )</h6>
                                  <p>"This NGO provide a platform for individuals to contribute to society and make a meaningful impact on the lives of others. Through their various programs and initiatives, Matra Chhaya Seva Sansthan Foundation have become a vital part of our society's social fabric, and their contributions are essential to creating a more just and equitable society for all."</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi4} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title"> श्री आरके चतुर्वेदी </h4>
                                  <h6>( पूर्व आईजी उत्तर प्रदेश एवं पुलिस भर्ती बोर्ड के सदस्य  )</h6>
                                  <p>"As an civil servant, I have seen the power of partnerships in creating positive change. This NGO has been a valuable partner in our efforts to promote sustainable development and improve the lives of our citizens. Their collaboration and commitment to our shared goals have been critical to our success."</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi5} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title">श्री  पवन सिंह</h4>
                                  <h6>(  चेयरमैन एसआर ग्रुप ऑफ कॉलेज तत्कालीन एम .एल .सी सीतापुर  उत्तर प्रदेश) </h6>
                                  <p>"As a responsible corporate citizen, we're honored to work alongside NGOs that share our values of compassion, sustainability, and social responsibility."</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="card  testi">
                                <div className="testiimg">
                                  <img className="img-fluid" alt="100%x280" src={testi6} />
                                </div>
                                <div className="card-body cardtext cardtext1">
                                  <h4 className="card-title">संयुक्ता भाटिया</h4>
                                  <h6>(पूर्व मेयर लखनऊ, उत्तर प्रदेश एवं समाज सेविका ) </h6>
                                  <p>"During my time in office, I had the opportunity to witness the incredible impact this NGOs have on our communities. Their tireless efforts to address social issues and promote positive change are truly inspiring."</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-6 text-right">
                    <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                      <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>



          </div>

        </div>





      </div>
    </>
  )
}

export default About
