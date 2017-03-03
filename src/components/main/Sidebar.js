import React from 'react'

import '../../styles/Sidebar.css'

const Sidebar = ({ item, itemType, itemIndex }) => {
  if (!item) { return null }
  return (
    <div className="sidebar">
      <h3 style={{color: "#4EDFFF"}}>{item && item.name}</h3>
      <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
        <h4 style={{color: "#FF1FA9", display: "inline-block"}}>{itemType}</h4>
        <div id="diamond"></div>
      </div>
      <div className="active-number-container">
        <h4
          className="active-number"
          style={{display: "block", color: "#4EDFFF"}}>
          {itemIndex < 9 ? `0${itemIndex + 1}` : itemIndex + 1}
        </h4>
      </div>    
      <p style={{color: "white"}}>{item && item.description}</p>
    </div>
  )
}

export default Sidebar
