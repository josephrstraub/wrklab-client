import React from 'react'
import { NavLink } from 'react-router-dom'

import DynamicMenuLines from './DynamicMenuLines'

const DynamicMenuItem = ({ activeIndex, item, handleClick }) => (
  <div>
	<NavLink to={item.linkTo} activeStyle={{color: "#FF1FA9"}} style={{color: "white", fontSize: "1.2em", ...item.customStyles}}>{item.title}</NavLink>
	{ item.lines.length > 0 && activeIndex > -1 && <DynamicMenuLines activeIndex={activeIndex} lines={item.lines} handleClick={handleClick} /> }
  </div>
)

export default DynamicMenuItem