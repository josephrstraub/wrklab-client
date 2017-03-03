import React, { Component } from 'react'

import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import NavLink from 'react-router-dom'

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

const navItems = [
	{text: "FAQ", path: "/faq"},
	{text: "ABOUT US", path: "/about/philosophy"},
	{text: "PRIVACY POLICY", path: "/privacy-policy"},
	{text: "T&C", path: "/terms-and-conditions"}
]

class MainMenuSubmodulesNavBar extends Component {
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
        {
          navItems.map((navItem, index) => (
            <ButtonGroup key={index}>
              <LinkContainer
                to={{ pathname: navItem.path }}
                style={ this.state.hoveredIndex === index ? styles.hovered : styles.inactive }
                activeStyle={styles.active}
                onMouseEnter={this.handleMouseEnter.bind(this, index)}
                onMouseLeave={this.handleMouseLeave.bind(this, index)}
              >
                <Button>{navItem.text}</Button>
              </LinkContainer>
            </ButtonGroup>
          ))
        }
      </ButtonGroup>
    )
  }
}

export default MainMenuSubmodulesNavBar
