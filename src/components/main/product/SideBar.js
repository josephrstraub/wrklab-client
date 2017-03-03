import React from 'react'

const styles = {
  textAlign: "left",
  fontSize: "13px"
}

const ProductSideBar = ({ name, description }) => (
  <div>
    <h3 style={{...styles, color: "#FF1FA9", fontSize: "20px"}}>{name}</h3>
    <h4 style={styles}>Walnut Top | Brass Base</h4>
    <p style={styles}>{description}</p>
  </div>
)

export default ProductSideBar
