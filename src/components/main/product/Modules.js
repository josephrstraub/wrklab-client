import React, { Component } from 'react'

const getChipStyles = (isActive) => ({
  width: "20px",
  height: "10px",
  borderRadius: "6px",
  border: isActive ? "1px solid #4EDFFF" : "1px solid black",
  boxSizing: "content-box",
  margin: "0 5px",
  fontSize: "8px",
  cursor: "pointer"
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

class Modules extends Component {
  componentWillUnmount() {
    this.props.changeActiveModule("")
  }
  render() {
    let { modules, activeModule, changeActiveModule } = this.props
    if (!modules.length) { return null }
    let chips = modules.map((module, index) => (
      <li
        key={index}
        style={getChipStyles(module === activeModule)}
        onClick={changeActiveModule.bind(null, module)}
      >
        {module}
      </li>
    ))
    return (
      <div>
        <h4 style={textStyles}>MODULES</h4>
        <ul style={listStyles}>{chips}</ul>
      </div>
    )
  }
}

export default Modules
