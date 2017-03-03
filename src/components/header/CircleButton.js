import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../actions/contact'
import { updatePreviousLocation } from '../../actions/location'

class HeaderCircle extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		if (this.props.modalIsVisible) {
			this.props.toggleModal()
		} else if (this.props.locationIsMainMenu) {
			this.props.push(this.props.previousLocation)
		} else {
			this.props.updatePreviousLocation(this.props.currentLocation)
			this.props.push("/main-menu")
		}
	}
	render() {
		return (
			<div className="circle" onClick={this.handleClick}>
		        <div
		        	ref="first"
		        	className={`hamburger-line first ${this.props.modalIsVisible || this.props.locationIsMainMenu ? "make-x" : "make-hamburger"}`}></div>
		        <div
		        	ref="second"
		        	className={`hamburger-line second ${this.props.modalIsVisible || this.props.locationIsMainMenu ? "make-x" : "make-hamburger"}`}></div>
		        <div
		        	ref="third"
		        	className={`hamburger-line third ${this.props.modalIsVisible || this.props.locationIsMainMenu ? "make-x" : "make-hamburger"}`}></div>
	    	</div>
      )
	}
}

const mapStateToProps = ({ modalIsVisible, previousLocation }, ownProps) => ({
	currentLocation: ownProps.location.pathname,
	locationIsMainMenu: ownProps.location.pathname === "/main-menu", 
	modalIsVisible,
	previousLocation
})

const mapDispatchToProps = (dispatch) => ({
	toggleModal: () => dispatch(toggleModal()),
	updatePreviousLocation: (location) => dispatch(updatePreviousLocation(location))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderCircle)