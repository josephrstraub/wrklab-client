import React, { Component } from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'

import '../../styles/MainMenu.css'

const activeStyles = {
  color: "#FF1FA9"
}

class Content extends Component {
  render() {
    let { columnNumber, previousLocation, toggleMainMenu } = this.props
    switch(columnNumber) {
      case 'ONE':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <a href="mailto:hello@wrklab.co.in"><h3>hello@wrklab.co.in</h3></a>
            <ReactCSSTransitionGroup
              transitionName="social-media"
              transitionEnter={false}
              transitionLeave={false}
              transitionAppear={true}
              transitionAppearTimeout={500}>
              <div style={{display: "flex", justifyContent: "center"}}>
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </ReactCSSTransitionGroup>
            <h3 style={{marginTop: "auto"}}>+91 987 310 9889</h3>
            <h3>12/14, East Patel Nagar<br></br>New Delhi - 110008, India</h3>
          </div>
        )
      case 'TWO':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <Link to="/process"><h3 style={previousLocation.includes("/process") ? activeStyles : {}} onClick={toggleMainMenu}>Process</h3></Link>
            <Link to="/vision"><h3 style={previousLocation.includes("/vision") ? activeStyles : {}} onClick={toggleMainMenu}>Virtual Reality</h3></Link>
            <Link to="/terms-and-conditions" style={{marginTop: "auto"}}><h3>T&C</h3></Link>
            <Link to="/privacy-policy"><h3>Privacy Policy</h3></Link>
          </div>
        )
      case 'THREE':
        return (
          <div style={{display: "flex", flexDirection: "column", height: "900px", padding: "60px 0"}}>
            <Link to="/featured"><h3 style={previousLocation.includes("/featured") ? activeStyles : {}} onClick={toggleMainMenu}>Feautured Projects</h3></Link>
            <Link to="/products"><h3 style={previousLocation.includes("/products") ? activeStyles : {}} onClick={toggleMainMenu}>Products</h3></Link>
            <Link to="/about/philosophy" style={{marginTop: "auto"}}><h3>About Us</h3></Link>
            <Link to="/faq"><h3>FAQs</h3></Link>
          </div>
        )
      default:
        return null
    }
  }
}


export default Content
