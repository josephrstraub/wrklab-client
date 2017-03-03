import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getProcesses } from '../actions/process'
import { getFeaturedProjects } from '../actions/featured'

import { Grid } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'

import Footer from './footer'
import Header from './header'
import Main from './main'
import ModalWindow from './main/ModalWindow'

import '../styles/index.css'

const getBackgroundColor = (location, activeProcessIndex) => {
  location = location.split("/")[1]
  console.log(location)
  switch(location) {
    case 'featured':
      return "#0C4352"
    case 'vision':
      return "#4F1452"
    case 'process':
      let colors = ["#4F1452", "#19234D", "#660033", "#212801", "#19234D", "#242424", "#003F52"]
      return colors[(activeProcessIndex + colors.length) % colors.length]
    default:
      return "white"
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { backgroundColor: "white" }
  }
  componentDidMount() {
    this.setState({ backgroundColor: getBackgroundColor(this.props.location.pathname, this.props.activeProcessIndex) })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ backgroundColor: getBackgroundColor(nextProps.location.pathname, this.props.activeProcessIndex) })
  }
  handleWheel(event) {
    if (this.props.location.pathname === "/" && event.deltaY > 0) {
      this.props.push("/process")
    }
  }
  render() {
    return (
      <div
        className={this.props.location.pathname === "/" ? "landing" : ""}
        style={{backgroundColor: this.state.backgroundColor, height: "100vh"}}
        onWheel={this.handleWheel.bind(this)}
      >
        <Grid fluid>
          <Header />
          <Main />
        </Grid>
        <Footer />
        { this.props.modalIsVisible && <ModalWindow /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeProcessIndex: state.processes.activeIndex,
  modalIsVisible: state.modalIsVisible
})

const mapDispatchToProps = (dispatch) => ({
  getProcesses: () => dispatch(getProcesses()),
  getFeaturedProjects: () => dispatch(getFeaturedProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
