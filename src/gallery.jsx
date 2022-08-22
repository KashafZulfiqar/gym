import React, { Component } from 'react'

export default class Gallery extends Component {
  render() {
    return (
      <>
      <div className="container-fluid py-5">
          <div className="container text-center py-3">
              <h1>Workout Gallery</h1>
          </div>
          <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 pic7"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 pic8"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 pic9"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 pic10"></div>
          </div>
      </div>
      </>
    )
  }
}
