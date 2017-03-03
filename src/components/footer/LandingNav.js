import React from 'react'
import { connect } from 'react-redux'

import { toggleModal } from '../../actions/contact'

import { Button, ButtonGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import ModalButton from './ModalButton'

const buttonGroupStyles = {
  position: "relative",
  backgroundColor: "white",
  borderRadius: "30px/30px",
  overflow: "hidden",
  boxShadow: "0px 1px 6px 0px rgba(0,0,0,.4)"
}

const LandingNav = ({ modalIsVisible, toggleModal }) => (
    <ButtonGroup bsSize="large" style={buttonGroupStyles}>
      <Button
        style={{color: "#FF1FA9", borderRight: "1px solid rgba(0,0,0,.1)"}}
        onClick={toggleModal}
      >
        REQUEST CONTACT
      </Button>
      <LinkContainer to={{ pathname: "/process" }} style={{color: "#16D400", borderRight: "1px solid rgba(0,0,0,.1)"}}>
        <Button>WHAT WE DO</Button>
      </LinkContainer>
      <LinkContainer to={{ pathname: "/products" }} style={{color: "#4EDFFF"}}>
        <Button>WORKS</Button>
      </LinkContainer>
      { modalIsVisible && <ModalButton customStyles={{position: "absolute", top: 0, right: 0}} /> }
    </ButtonGroup>
)

const mapStateToProps = ({ modalIsVisible }) => ({ modalIsVisible })

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNav)
