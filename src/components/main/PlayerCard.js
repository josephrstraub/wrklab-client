import React from 'react'

import { Image } from 'react-bootstrap'

const PlayerCard = (props) => (
	<div style={{backgroundColor: "#F2F2F2", textAlign: "center", display: "inline-block"}}>
		<Image src="http://www.fillmurray.com/g/200/200" responsive style={{borderRadius: "100%", margin: "auto"}} />
		<h4 style={{color: "#FF1FA9"}}>{props.name}</h4>
		<h4 style={{color: "rgba(0,0,0,.4)"}}>{props.title}</h4>
		<p style={{color: "rgba(0,0,0,.4)"}}>{props.bio}</p>
	</div>
)

export default PlayerCard