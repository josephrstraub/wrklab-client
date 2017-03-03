import React from 'react'

import { Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import Philosophy from './Philosophy'
import Team from './Team'
import DynamicMenu from './DynamicMenu'

const About = (props) => (
	<Row>
		<Col xs={8} xsOffset={2} style={{marginTop: "80px"}}>
			<Route path="/about/philosophy" component={Philosophy} />
			<Route path="/about/team" component={Team} />
		</Col>
		<Col xs={2}>
			<DynamicMenu
				menuItems={[
					{linkTo: "/about/philosophy", lines: [], title: "PHILOSOPHY", customStyles: {color: "rgba(0,0,0,.4)"}},
					{linkTo: "/about/team", lines: [], title: "TEAM", customStyles: {color: "rgba(0,0,0,.4)"}}
				]}/>
		</Col>
	</Row> 
)

export default About