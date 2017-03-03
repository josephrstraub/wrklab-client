import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { changeActiveFeaturedProject, changeActiveProcess, changeActiveVision, getProcesses, getVisions, getFeaturedProjects } from '../actions'

import DynamicMenu from '../components/DynamicMenu'
import Sidebar from '../components/Sidebar'

class StandardLayout extends Component {
	componentDidMount() {
		if (this.props.data.length) { return }
		this.props.fetchData()
	}
	render() {
		let { activeIndex, children, data, dynamicMenuContent, itemType, changeActiveIndex } = this.props
		return (
			<Row>
				<Col xs={2}>
					{ data.length > 0 && <Sidebar item={data[activeIndex]} itemIndex={activeIndex} itemType={itemType} /> }
				</Col>
				<Col xs={6}>{ children }</Col>
				<Col xs={2} xsOffset={2}>
					{ dynamicMenuContent.length > 0 &&
						<DynamicMenu
							activeIndex={activeIndex}
							menuItems={dynamicMenuContent}
							handleClick={changeActiveIndex} />
					}
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const dataTypes = {
		'/featured': {
			...state.featuredProjects,
			dynamicMenuContent: [
				{title: "FEATURED", lines: state.featuredProjects.data, linkTo: "/featured"},
				{title: "PRODUCTS", lines: [], linkTo: "/products"}
			],
			itemType: "FEATURED"
		},
		'/process': {
			...state.processes,
			dynamicMenuContent: [
				{title: "PROCESS", lines: state.processes.data, linkTo: "/process"},
				{title: "VR DEMO", lines: [], linkTo: "/vision"}
			],
			itemType: "PROCESS"
		},
		'/vision': {
			...state.vision,
			dynamicMenuContent: [
				{title: "PROCESS", lines: [], linkTo: "/process"},
				{title: "VR DEMO", lines: state.visions.data, linkTo: "/vision"}
			],
			itemType: "VR DEMO"
		}
	}
	return dataTypes[ownProps.location.pathname]
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const dataTypes = {
		'/featured': {
			changeActiveIndex: (index) => dispatch(changeActiveFeaturedProject(index)),
			fetchData: () => dispatch(getFeaturedProjects())
		},
		'/process': {
			changeActiveIndex: (index) => dispatch(changeActiveProcess(index)),
			fetchData: () => dispatch(getProcesses())
		},
		'/vision': {
			changeActiveIndex: (index) => dispatch(changeActiveVision(index)),
			fetchData: () => dispatch(getVisions())
		}
	}
	return dataTypes[ownProps.location.pathname]
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardLayout)