import React from 'react'

import { connect } from 'react-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../styles/Price.css'

const headingStyles = {
  textAlign: "left",
  fontSize: "10px",
  color: "rgba(0,0,0,.4)",
  marginLeft: "5px"
}

const priceStyles = {
  textAlign: "left",
  fontSize: "30px",
  marginLeft: "5px"
}

const ProductPrice = ({ price }) => (
  <div style={ !price ? {visibility: "hidden"} : {} }>
    <h4 style={headingStyles}>PRICE</h4>
    <ReactCSSTransitionGroup
      transitionName="price"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <h4 style={priceStyles}>{price}</h4>
    </ReactCSSTransitionGroup>
  </div>
)

const mapStateToProps = (state) => ({
  price: 1200
})

export default connect(mapStateToProps)(ProductPrice)
