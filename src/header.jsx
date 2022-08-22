import React, { Component } from 'react'
import "./style.css"
export default class Header extends Component {
  render() {
    return (
      <>
      <div className="container-fluid headr py-5 text-white">
          <div className="container">
         <h1 className='mt-5 pt-5 hd1'>IT'S <span style={{color:"#c11325"}}>GYM</span>  TIME. LET'S GO</h1>
         <h1 className='pb-5 hd1'>WE ARE READY TO <span style={{color:"#c11325"}}>FIT YOU</span> </h1>
         </div>
          </div>
        
      </>
    )
  }
}
