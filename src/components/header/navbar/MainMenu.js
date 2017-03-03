import React, { Component } from 'react'

import { connect } from 'react-redux'

import { toggleModal } from '../../../actions/contact'

import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

import '../../../styles/navbar.css'

const styles = {
  active: {
    backgroundColor: "white",
    color: "#FF1FA9"
  },
  hovered: {
    backgroundColor: "#F2F2F2",
    color: "#16D400"
  },
  inactive: {
    backgroundColor: "#F2F2F2",
    color: "black"
  }
}

const getUrlString = (string) => string.toLowerCase().replace(/\s+/g, '-')

class MainMenuNavBar extends Component {
  constructor() {
    super()
    this.state = { hoveredIndex: null }
  }
  handleMouseEnter(index) {
    this.setState({
      hoveredIndex: index
    })
  }
  handleMouseLeave(index) {
    this.setState({
      hoveredIndex: null
    })
  }
  render() {
    return (
      <ButtonGroup justified>
        <ButtonGroup>
        	<Button
        		style={ this.state.hoveredIndex === 0 ? styles.hovered : styles.inactive }
        		onMouseEnter={this.handleMouseEnter.bind(this, 0)}
        		onMouseLeave={this.handleMouseLeave.bind(this, 0)}
        		onClick={this.props.toggleModal}
        	>
        		CONTACT
        	</Button>
        </ButtonGroup>
        <ButtonGroup>
          <LinkContainer
            to={{ pathname: "/vision" }}
            style={ this.state.hoveredIndex === 1 ? styles.hovered : styles.inactive }
            activeStyle={styles.active}
            onMouseEnter={this.handleMouseEnter.bind(this, 1)}
            onMouseLeave={this.handleMouseLeave.bind(this, 1)}
            isActive={() => this.props.previousLocation.includes("/vision")}
          >
            <Button>VISION</Button>
          </LinkContainer>
        </ButtonGroup>
        <ButtonGroup>
          <LinkContainer
            to={{ pathname: "/products" }}
            style={ this.state.hoveredIndex === 2 ? styles.hovered : styles.inactive }
            activeStyle={styles.active}
            onMouseEnter={this.handleMouseEnter.bind(this, 2)}
            onMouseLeave={this.handleMouseLeave.bind(this, 2)}
            isActive={() => this.props.previousLocation.includes("/products")}
          >
            <Button>WORKS</Button>
          </LinkContainer>
        </ButtonGroup>
      </ButtonGroup>
    )
  }
}

const mapStateToProps = ({ previousLocation }) => ({ previousLocation })

const mapDispatchToProps = (dispatch) => ({
	toggleModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuNavBar)