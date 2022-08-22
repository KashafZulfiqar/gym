import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="container-fluid bg-dark py-5">
          <div className="container">
              <div className="row"> 
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <input className='inp py-2' type="text" placeholder='Enter Name ' name="" id="" />
                      <input className='inp py-2' type="email"placeholder='Enter Name ' name="" id="" />
                      <input className='inp py-2' type="text" placeholder='Enter Mobile ' name="" id="" />
                      <input className='inp ' type="textaera" placeholder='Enter Message' name="" id="" />
                      <button className='btn bg-danger text-white mt-4'>Send Messange</button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-white">
                      <h4 className='text-danger mt-4'>Get Connected with Gym</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <p>Gali no 11, House no 11, Lahore</p>
                      <p>92 9999999999</p>
                      <p>info@gym.com</p>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
  }
}
