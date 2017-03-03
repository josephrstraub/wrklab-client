import React, { Component } from 'react'

import _ from 'lodash'

const styles = {
  chip: {
    base: {
      width: "40px",
      height: "20px",
      borderRadius: "6px",
      border: "1px solid black",
      color: "black",
      boxSizing: "content-box",
      margin: "0 5px",
      fontSize: "10px",
      lineHeight: "20px",
      textAlign: "center",
      cursor: "pointer"
    },
    active: {
      border: "2px solid #4EDFFF"
    },
    unavailable: {
      border: "1px solid rgba(0,0,0,.1)",
      color: "rgba(0,0,0,.4)"
    }
  },
  list: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyleType: "none",
    width: "60%"
  },
  text: {
    textAlign: "left",
    fontSize: "10px",
    color: "rgba(0,0,0,.4)",
    marginLeft: "5px"  
  }
}

class ProductSizes extends Component {
  componentDidUpdate(prevProps) {
    const isAvailable = (size) => this.props.availableSizes.includes(size)
    if ( !_.isEqual(prevProps.sizes, this.props.sizes) || !isAvailable(this.props.activeSize)) {
      this.props.changeActiveSize(this.props.sizes.find(isAvailable))
    }
  }
  render() {
    let { sizes, activeSize, availableSizes, changeActiveSize } = this.props
    if (!sizes.length) { return null }
    let sizeItems = sizes.map((size, index) => (
      <li
        key={index}
        style={Object.assign(
          {},
          styles.chip.base,
          size === activeSize ? styles.chip.active : {},
          !availableSizes.includes(size) ? styles.chip.unavailable : {}
        )}
        onClick={availableSizes.includes(size) && changeActiveSize.bind(null, size)}
      >
        {size}
      </li>
    ))
    return (
      <div style={{textAlign: "left"}}>
        <h4 style={styles.text}>SIZES</h4>
        <ul style={styles.list}>{sizeItems}</ul>
      </div>
    )
  }
}

export default ProductSizes
