import React, { Component } from 'react'

import { connect } from 'react-redux'

import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import NavLink from 'react-router-dom'

import '../../../styles/navbar.css'

const styles = {
  active: {
    backgroundColor: "inherit",
    color: "#FF1FA9"
  },
  hovered: {
    backgroundColor: "#27697B",
    color: "#16D400"
  },
  inactive: {
    backgroundColor: "#27697B",
    color: "white"
  }
}

const getUrlString = (string) => string.toLowerCase().replace(/\s+/g, '-')

class FeaturedNavBar extends Component {
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
          this.props.projects.map((project, index) => (
            <ButtonGroup key={index}>
              <LinkContainer
                to={{ pathname: `/featured/${getUrlString(project.name)}` }}
                style={ this.state.hoveredIndex === index ? styles.hovered : styles.inactive }
                activeStyle={styles.active}
                onMouseEnter={this.handleMouseEnter.bind(this, index)}
                onMouseLeave={this.handleMouseLeave.bind(this, index)}
              >
                <Button>{project.name}</Button>
              </LinkContainer>
            </ButtonGroup>
          ))
        }
      </ButtonGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.featuredProjects.data
})

export default connect(mapStateToProps)(FeaturedNavBar)
