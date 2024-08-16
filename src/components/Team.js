import React from 'react'
import team1 from './img/t.jpg'
import team2 from './img/t.jpg'
import team3 from './img/t.jpg'
import team4 from './img/t.jpg'
import team5 from './img/t.jpg'

import team7 from './img/t.jpg'
import team9 from './img/t.jpg'
import { Helmet } from 'react-helmet-async'
import team10 from './img/t.jpg'
import team11 from './img/t.jpg'
import team12 from './img/t.jpg'
import team13 from './img/t.jpg'
import team14 from './img/t.jpg'



function Team() {
  return (
    <>

      <Helmet>
        <title>Unite for Good: Matra Chhaya Seva Sansthan NGO - Meet Our Passionate Team Driving Change</title>
        <meta
          name="description"
          content="Matra Chhaya Seva Sansthan: A passionate team within an NGO, striving for women's empowerment through advocacy, education, and support. Empowering women for a brighter future."

        />
        <link rel="canonical" href="/team" />
      </Helmet>



      <div className="teamcontainer">

        <div className="contactheader">
          <h1>Our Team</h1>
        </div>


        <div className="teamseccontainer">
          <div className="teamsecboxs">


            <div className="teamsecbox ">
              <div className="teamboximg">
                <img src={team1} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>गुंजन वर्मा

                </h3>
                <h5>अध्यक्ष
                </h5>
              </div>

            </div>
            <div className="teamsecbox">
            <div className="teamboximg">
              <img src={team2} alt="img" />
            </div>
            <div className="teamboxcontent">
              <h3>रोली जायसवाल </h3>
              <h5>उपाध्यक्ष </h5>
            </div>
          </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team3} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>मोना वर्मा  </h3>
                <h5> सचिव  </h5>
              </div>
            </div>
            
            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team10} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>राजपति वर्मा </h3>
                <h5> कोषाध्यक्ष </h5>
              </div>
            </div>


            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team4} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>नीलम श्रीवास्तव
                </h3>
                <h5>संगठन मंत्री
                </h5>
              </div>

            </div>

            <div className="teamsecbox">
            <div className="teamboximg">
              <img src={team5} alt="img" />
            </div>
            <div className="teamboxcontent">
              <h3>पल्लवी विनोद
              </h3>
              <h5>मीडिया प्रभारी
              </h5>
            </div>
          </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team7} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>सरुपा तिवारी
                </h3>
                <h5>सदस्य
                </h5>
              </div>
            </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team11} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>रूबी निरंजन </h3>
                <h5>अलीगढ़ प्रभारी </h5>
              </div>
            </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team9} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>प्रदीप शुक्ला
                </h3>
                <h5>राष्ट्रीय प्रवक्ता
                </h5>
              </div>
            </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team12} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>डॉ. एस के वर्मा
                </h3>
                <h5>डिप्टी सीएमओ अम्बेडकरनगर
                </h5>
              </div>

            </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team13} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>मिथलेश वर्मा </h3>
                <h5>अंबेडकर नगर प्रभारी </h5>
              </div>

            </div>

            <div className="teamsecbox">
              <div className="teamboximg">
                <img src={team14} alt="img" />
              </div>
              <div className="teamboxcontent">
                <h3>शंकर वर्मा
                </h3>
                <h5>राष्ट्रीय प्रभारी
                </h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Team
