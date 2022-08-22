import React, { Component } from 'react'
import Nav from './nav' 
import Header from './header'
import About from './about'
import Services from './services'
import Class from './clases'
import Gallery from './gallery'
import Package from './Package'
import Contact from './contact'
export default class  App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <About/>
        <Services/>
        <Class/>
        <Gallery/>
        <Package/>
        <Contact/>
      </div>
      
    )
  }
}

