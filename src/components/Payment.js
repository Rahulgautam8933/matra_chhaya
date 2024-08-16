import React, { useEffect } from 'react'

function Payment({ close, maney }) {



  function onclick() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read terms";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [])
  return (
    <>


      <div className="modalcontainer"></div>

      <div className="modelcontent">
        <div className="paymentupperpart">
          <div className="payementvalue">
            <p>&#8377;</p>
          </div>
          <div className="paymentinputpart">
            <input type="text" value={maney} />
          </div>

        </div>


        <div className="paymentupperpart2">
          <div className="payementboxs">
            <p>&#8377; 100</p>
          </div>
          <div className="payementboxs">
            <p>&#8377; 250</p>
          </div>
          <div className="payementboxs">
            <p>&#8377; 500</p>
          </div>
          <div className="payementboxs">
            <p>&#8377; 1000</p>
          </div>
          <div className="payementboxs" id='payementboxs'>
            <p>custom <br /> amount</p>
          </div>


        </div>


        <div className="paymentupperpart3">
          <p>Select Payment Method</p>

          <div className="paymentmethodlinks">
            <p><a href="/"><i class="zmdi zmdi-circle-o"></i> Test Donation</a></p>
            <p><a href="/"><i class="zmdi zmdi-circle-o"></i> Offline Donation</a></p>
            <p><a href="/"><i class="zmdi zmdi-circle-o"></i> Stripe - Credit Card</a></p>
          </div>

        </div>

        <div className="paymentmidform">
          <p>Personal Info</p>
          <form>

            <div className="paymentformde">
              <div className="paymentforminner">
                <div className="paymentlable1">
                  <label htmlFor="name">First Name*</label>
                </div>
                <div className="paymentinput1">
                  <input type="text" placeholder=' First Name' />
                </div>
              </div>
              <div className="paymentforminner">
                <div className="paymentlable1">
                  <label htmlFor="name">Second Name*</label>
                </div>
                <div className="paymentinput1">
                  <input type="text" placeholder=' Second Name' />
                </div>
              </div>
            </div>

            <div className="paymentemail">
              <div className="paymentlable1">
                <label htmlFor="email">Email Address * </label>
              </div>
              <div className="paymentemailinput">
                <input type="text" placeholder='Email Address' />
              </div>
            </div>

          </form>
        </div>

        <div className="termsmenu">
        </div>
        <div className="paymentcheckbox">

          <div id="paymentterms">
          </div>

        </div>

        <div className="paymentdonationtotal">
          <p>Total Donation</p>
          <input type="text" value={maney} />
        </div>


        <div id="paymentdonatebutton">
          <button>Donate now</button>
        </div>

        <div className="closebutton">
          <p onClick={close}><i class="zmdi zmdi-close-circle"></i></p>
        </div>

      </div>

    </>
  )
}

export default Payment 
