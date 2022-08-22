import React, { Component } from 'react'
import "./style.css"
import Pic1 from "./aeserts/about1.jpg"
import Pic2 from "./aeserts/about2.jpg"
import Pic3 from "./aeserts/about3.jpg"


export default class About extends Component {
  render() {
    return (
      <>
   <div className="container border py-5">
   <div className="row">
       <div className="col-4 text-center text-white">
       <div className="card h-25  " style={{width: "18rem;"}}>
       <img className="card-img-top " src={Pic1} alt=""/>
       <div className="card-body bg-dark pb-5">
           <h4 className='card-text mb-4'>Free Consultation</h4>
    <p className="card-text pb-3 cd-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  </div>
</div>
       </div>
       <div className="col-4 text-center text-white">
       <div className="card h-25 " style={{width: "18rem;"}}>
       <img className="card-img-top " src={Pic2} alt=""/>
       <div className="card-body bg-danger pb-5">
           <h4 className='card-text mb-4'>Best Training</h4>
    <p className="card-text cd-para pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  </div>
</div>
       </div>
       <div className="col-4 text-center text-white">
       <div className="card h-25 " style={{width: "18rem;"}}>
       <img className="card-img-top " src={Pic3} alt=""/>
       <div className="card-body bg-dark pb-5">
           <h4 className='card-text mb-4'>Build Perfect Body</h4>
    <p className="card-text cd-para pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  </div>
</div>
       </div>
   </div>
   </div>
      </>
    )
  }
}
