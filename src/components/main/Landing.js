import React, { Component } from 'react'
import '../styles/Landing.css'

class Landing extends Component {
  componentWillMount() {
    if (this.props.mainMenuIsVisible) {
      this.props.toggleMainMenu()
    }
  }
  render() {
    return null
  }
}

export default Landing
