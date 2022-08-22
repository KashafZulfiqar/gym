import React, { Component } from 'react'
import pic4 from "./aeserts/class2.png"

export default class Class extends Component {
  render() {
    return (
      <>
      <div className="container py-5">
          <div className="row py-5">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
        <img className='w-100 h-100' src={pic4}  alt="" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-sm-5 col-12 mt-3">
                  <h2>Our Classes</h2>
                  <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <div className="row  py-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3  pic5 ">
                   <div className="price bg-danger">
                       <h4>99$</h4>
                   </div>
                   </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-dark mt-3 text-white">
                        <h5 className='mt-4'>Stretching Training</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h6>Get details</h6>
                    </div>
                    {/* </div>
                    <div className="row  "> */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3  bg-danger text-white ">
                    <h5 className='mt-4' >Stretching Training</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h6>Get details</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3 pic5">
                   <div className="price bg-danger">
                       <h4>99$</h4>
                   </div>
                   </div>
                   </div>
              </div>
          </div>
      </div>

    <div className="container-fluid bg-dark ">
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-white mt-5">
                   <h2 className='mt-5'>Start Your Training Today</h2>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                   <button className='btn bg-danger '>start now</button> 
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 pic6"></div>
            </div>
        </div>
    </div>
      </>
    )
  }
}
