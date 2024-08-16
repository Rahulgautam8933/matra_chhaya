import React from 'react'
import img1 from './img/t.jpg'
import img2 from './img/t.jpg'
import img3 from './img/t.jpg'
import img4 from './img/t.jpg'
import img5 from './img/t.jpg'
import img6 from './img/t.jpg'



function Homesec5() {
  return (
    <>


      <div className="section5boxs">

        <div className="sec5heading1">
          <h1>
            Countless
          </h1>
        </div>


        <div className="section6mid">


          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">

                      <div className="carousel-item active">
                      
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain "  >
                              <img className="img-fluid" alt="provide stationary" src={img1} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Support for poor girl  <br /> <br /></h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain">
                              <img className="img-fluid" alt="providing foods" src={img2} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Provide groceries and food packets to needy ones</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain">
                              <img className="img-fluid" alt="eduction for children" src={img3} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Support for poor child education like fee, books uniforms etc.</h4>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className="carousel-item ">
                      
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain "  >
                              <img className="img-fluid" alt="provide stationary" src={img4} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Old age Service <br /> <br /></h4>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain">
                              <img className="img-fluid" alt="providing foods" src={img5} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Prostheses for the disables</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card cards cardmain">
                              <img className="img-fluid" alt="eduction for children" src={img6} />
                              <div className="card-body cardtext">
                                <h4 className="card-title">Support for poor Girl marriage</h4>
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
    </>
  )
}

export default Homesec5
