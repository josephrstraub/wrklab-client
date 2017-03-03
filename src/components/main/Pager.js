import React, { Component } from 'react'

import { Image } from 'react-bootstrap'

import '../../styles/Pager.css'

class Pager extends Component {
  componentDidMount() {
    if (!this.props.leftArrowVisible) {
      let {top: bodyTop, left: bodyLeft} = document.body.getBoundingClientRect()
      let {top: hamburgerTop, left: hamburgerLeft} = document.querySelector(".header .circle").getBoundingClientRect()
      let {top: circleTop, left: circleLeft} = this.refs.pagerCircle.getBoundingClientRect()
      this.refs.pagerCircle.style.transform = `translate(${(circleLeft - hamburgerLeft - bodyLeft) * -1}px, ${(circleTop - hamburgerTop - bodyTop) * -1}px)`
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.leftArrowVisible && !this.props.leftArrowVisible) {
      this.refs.pagerCircle.style.transform = "translateX(0)"
      this.refs.pagerCircle.style.transform = "translateY(0)"
    } else if (!nextProps.leftArrowVisible && this.props.leftArrowVisible) {
      let {top: bodyTop, left: bodyLeft} = document.body.getBoundingClientRect()
      let {top: hamburgerTop, left: hamburgerLeft} = document.querySelector(".header .circle").getBoundingClientRect()
      let {top: circleTop, left: circleLeft} = this.refs.pagerCircle.getBoundingClientRect()
      this.refs.pagerCircle.style.transform = `translate(${(circleLeft - hamburgerLeft - bodyLeft) * -1}px, ${(circleTop - hamburgerTop - bodyTop) * -1}px)`
    }
  }
  render() { 
    let { imageUrl, leftArrowVisible, rightArrowVisible, handleClick } = this.props
    return (
      <div className="pager">
        <div
          ref="pagerCircle"
          className={`arrow-btn ${!leftArrowVisible ? "hidden" : ""}`}
          onClick={handleClick.bind(null, -1)}
          >
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>
        {
          imageUrl ? <Image src={process.env.PUBLIC_URL + imageUrl} className="pager-img" role="presentation" responsive />
          : <p>No image yet</p>
        }
        <div
          className={`arrow-btn ${!rightArrowVisible ? "hidden" : ""}`}
          onClick={handleClick.bind(null, 1)}
          >
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default Pager
