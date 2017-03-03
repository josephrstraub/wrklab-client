import React from 'react'

import { makeKebab } from '../../reducers/products'

import { Image } from 'react-bootstrap'

const imageStyles = {
  maxHeight: "100%"
}

const textStyles = {
	fontSize: ".7em",
	padding: "0 5px"
}

const MasonryItem = ({ product, height, isFocused, textAlign, width, maxWidth, order }) => (
	<div>
		<div
			onClick={() => this.props.push(`/products/${makeKebab(product.category)}/${makeKebab(product.name)}`)}
			style={{display: "flex", flexDirection: height === "200px" ? "column" : "row",backgroundColor: "#F5F5F5", height, width, border: `2px solid ${isFocused ? "#16D400" : "white"}`}}
		>
		  <Image src={product.images[0]} style={{...imageStyles, maxWidth}} responsive/>
		  <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", order, height: "100%", width: "100%", textAlign}}>
		  	<h2 style={textStyles}>{product.name}</h2>
		  	<h2 style={{...textStyles, color: "rgba(0,0,0,.3)", margin: "auto 0"}}>materials | materials</h2>
		  	<h2 style={{...textStyles, color: "rgba(0,0,0,.3)"}}>{product.category}</h2>
		  </div>
		</div>
	</div>
)

export default MasonryItem
