import React, { Component } from 'react'

import { connect } from 'react-redux'

import { toggleModal } from '../../actions/contact'
import { submit } from 'redux-form'

import { Button } from 'react-bootstrap'

const defaultStyles = {
  color: "white",
  backgroundColor: "#FF1FA9",
  height: "49px",
  width: "163px",
  borderRadius: "20px",
  fontSize: "15px",
  fontWeight: 200,
  zIndex: 1100
}

class ModalButton extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.props.modalIsVisible) {
      this.props.submitForm()
    } else {
      this.props.toggleModal()
    }
  }
  render() {
    let { modalIsVisible, text, formData, customStyles, toggleModal, attemptFormSubmit } = this.props
    return (
      <div style={{textAlign: "right"}}>
        <Button
          bsSize="large"
          style={{...defaultStyles, ...customStyles}}
          onClick={this.handleClick}
        >
          {this.props.text}
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  modalIsVisible: state.modalIsVisible,
  text: state.modalIsVisible ? "SUBMIT" : "TALK TO US",
  formData: state.contactForm,
  customStyles: ownProps.customStyles
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: () => dispatch(toggleModal()),
  submitForm: () => dispatch(submit('ContactForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalButton)
