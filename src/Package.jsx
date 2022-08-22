import React, { Component } from 'react'
import pic11 from "./aeserts/price1.jpg"
import pic12 from "./aeserts/price2.jpg"
import pic13 from "./aeserts/price3.jpg"


export default class Package extends Component {
  render() {
    return (
      <>
      <div className="container py-5">
          <div className="container py-5 text-center">
              <h1>Choose Your Package</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
              <div className="card h-25 " style={{width: "18rem;"}}>
                  <div className="card bg-danger text-white text-center">
                      <h3>$59/Month</h3>
                  </div>
              <img className="card-img-top " src={pic11} alt=""/>
              <div className="card-body bg-light">
              <h4 className='card-text'>Body Building Training</h4>
              <p className="card-text ">Get Free WiFi</p>
                    <p className="card-text">Month to Month</p>
                    <p className="card-text ">No Time Restrictions</p>
                    <p className="card-text">Gym and Cardio</p>
                    <p className="card-text ">Service Locker Rooms</p>
                    <button className='btn bg-danger text-white'>Join Us</button>
  </div>
</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
              <div className="card h-25 " style={{width: "18rem;"}}>
              <div className="card bg-danger text-white text-center">
                      <h3>$69/Month</h3>
                  </div>
              <img className="card-img-top " src={pic12} alt=""/>
              <div className="card-body bg-light">
              <h4 className='card-text'>Build Perfect Body</h4>
              <p className="card-text ">Get Free WiFi</p>
                    <p className="card-text">Month to Month</p>
                    <p className="card-text ">No Time Restrictions</p>
                    <p className="card-text">Gym and Cardio</p>
                    <p className="card-text ">Service Locker Rooms</p>
                    <button className='btn bg-danger text-white'>Join Us</button>

  </div>
</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
              <div className="card h-25 " style={{width: "18rem;"}}>
              <div className="card bg-danger text-white text-center">
                      <h3>$99/Month</h3>
                  </div>
              <img className="card-img-top " src={pic13} alt=""/>
              <div className="card-body bg-light">
              <h4 className='card-text'>Build Perfect Body</h4>
              <p className="card-text ">Get Free WiFi</p>
                    <p className="card-text">Month to Month</p>
                    <p className="card-text ">No Time Restrictions</p>
                    <p className="card-text">Gym and Cardio</p>
                    <p className="card-text ">Service Locker Rooms</p>
                    <button className='btn bg-danger text-white'>Join Us</button>

  </div>
</div>
              </div>
          </div>
      </div>
      </>
    )
  }
}
