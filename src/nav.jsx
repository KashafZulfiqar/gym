import React, { Component } from 'react'
import "./style.css"
export default class Nav extends Component {
  render() {
    return (
      <> 
     <div className="container-fluid py-3 navb ">
     <div className="row">
       <div className=" offset-1 col-3">
      <h3 className=' text-white '><b>Fitness <span style={{color:"#c11325"}}>Club</span></b> </h3>
       </div>
       <div className="col-8"></div>
     </div>
     </div>  
      </>
    )
  }
}
