import React, { Component } from 'react'

import _ from 'lodash'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../../styles/ColorBars.css'

const getColorBarStyles = (color, finish, isActive) => ({
  width: "20px",
  height: "40px",
  borderRadius: "6px",
  border: isActive ? "2px solid #4EDFFF" : "0",
  backgroundImage: `
    linear-gradient(
      ${color} 50%,
      ${finish || color} 50%
    )`,
  boxSizing: "content-box",
  margin: "0 5px"
})

const listStyles = {
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 0,
  margin: "0 -5px",
  listStyleType: "none",
  width: "100%"
}

const textStyles = {
  textAlign: "left",
  fontSize: "10px",
  color: "rgba(0,0,0,.4)",
  marginLeft: "5px"
}

class ProductColors extends Component {
  componentDidMount() {
    console.log("MOUNTED")
    this.props.changeActiveColor(this.props.palettes[0] && this.props.palettes[0].color)
    this.props.changeActiveFinish(this.props.palettes[0] && this.props.palettes[0].finish)
  }
  componentWillReceiveProps(nextProps) {
    console.log("RECEIVE PROPS")
    if ( !_.isEqual(nextProps.palettes, this.props.palettes) ) {
      this.props.changeActiveColor(nextProps.palettes[0] && nextProps.palettes[0].color)
      this.props.changeActiveFinish(nextProps.palettes[0] && nextProps.palettes[0].finish)
    } 
  }
  render() {
    let { palettes, activeColor, activeFinish, changeActiveColor, changeActiveFinish } = this.props
    if (!palettes.length) { return null }
    let colorBars = palettes.map((palette, index) => (       
      <li
        key={index}
        style={getColorBarStyles(palette.color, palette.finish, palette.color === activeColor && (palette.finish || activeFinish) === activeFinish)}
        onClick={() => {
          changeActiveColor(palette.color)
          changeActiveFinish(palette.finish)
        }}>
      </li>
    ))
    return (
      <div>
        <h4 style={textStyles}>COLORS</h4>
        <ReactCSSTransitionGroup
          component={"ul"}
          style={listStyles}
          transitionName="color-bar"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {colorBars}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ProductColors
