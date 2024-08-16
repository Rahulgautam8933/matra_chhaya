import React, { useState } from 'react'
import Payment from './Payment';

function Donation() {
  const [money, setMoney] = useState({ m: "" })

  const [showModal, setModel] = useState(false);

  const closeModel = () => setModel(false);
  return (
    <>


      <div className="donationboxcontainer">
        <div className="donationboxs">
          <div className="donationbox1">
            <h2>We Need Donations</h2>
            <h5>Your small effort today can make a world of difference for a woman in need.</h5>

            <div className="homesec4rasegoal">
              <p>Raised:</p>
              <p>Goal: </p>
            </div>

            <div className="donationprogressbar">
              <div class="donationskilbox">
               
                <div className="donationskillbar">
                
                <span className='skill-per'>
                <span className='tooltips'>53%</span>
                </span>
                
                </div>


              </div>
            </div>



          </div>
          <div className="donationbox2">

            <div className="donationpaymentboxs1">
              <div className="donationpaymentbox1">
                <p>Please Select</p>
                <h2>AMOUNT TO DONATE</h2>
                <p>All donations are tax deductable.</p>
              </div>
              <div className="donationinput">
                <p>&#8377;</p>
                <input type="text" value={money.m} onChange={e => setMoney({ ...money, m: e.target.value })} />
              </div>

            </div>

            <div className="donationpaymentboxs2">

              <div onClick={() => setModel(true)} className="donationpaymentbox3">
                <p>&#8377; 100</p>
              </div>
              <div onClick={() => setModel(true)} className="donationpaymentbox3">
                <p>&#8377; 500</p>
              </div>
              <div onClick={() => setModel(true)} className="donationpaymentbox3">
                <p>&#8377; 1000</p>
              </div>
              <div onClick={() => setModel(true)} className="donationpaymentbox3">
                <p>&#8377; 10000</p>
              </div>

              <div className="donationpaymentbox3" id='donationpaymentbox3'>
                <p>Custom  Amount</p>
              </div>

            </div>


            <div className="donationpaymentbutton">

              <button onClick={() => setModel(true)}>Donate Now</button>
              {showModal && <Payment close={closeModel} maney={money.m} />}</div>



          </div>
        </div>

      </div>




    </>
  )
}

export default Donation
