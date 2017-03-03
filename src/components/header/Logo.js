import React from 'react'

import logo from '../../img/logo.png'
import logoText from '../../img/logo-text.png'

const Logo = (props) => (
  <div style={{display: "flex", justifyContent: "flex-end"}} onClick={() => props.push("/")}>
    <img src={logo} alt="logo" />
    <div className="logo-text">
      <img src={logoText} alt="logo text" />
      <div style={{width: "37px", height: "2px", backgroundColor: "#4EDFFF", marginTop: "4px"}}></div>
    </div>
  </div>
)

export default Logo
