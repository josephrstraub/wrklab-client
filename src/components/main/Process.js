import React, { Component } from 'react'

import {connect} from 'react-redux'

import { changeActiveProcess, getProcesses } from '../../actions/process'

import { Row, Col } from 'react-bootstrap'

import DynamicMenu from './DynamicMenu'
import Pager from './Pager'
import Sidebar from './Sidebar'

import '../../styles/Process.css'

class Process extends Component {
  constructor() {
    super()
    this.state = { delayingScroll: false }
  }
  componentDidMount() {
    if (!this.props.processes.length) {
      this.props.getProcesses()
    }
  }
  componentWillReceiveProps(nextProps) {
      let colors = ["#4F1452", "#19234D", "#660033", "#212801", "#19234D", "#242424", "#003F52"]
      let colorIndex = (nextProps.activeIndex + colors.length) % colors.length
      document.body.style.backgroundColor = colors[colorIndex]
  }
  componentWillUnmount() {
    this.props.changeActiveProcess(0)
    window.clearTimeout(this.timeout)
  }
  cycleProcesses(increment) {
    this.props.changeActiveProcess(this.props.activeIndex + increment)
  }
  handleWheel(event) {
    if (!this.state.delayingScroll) {
      this.setState({ delayingScroll: true })
      if (event.deltaY > 0 && this.props.activeIndex !== 0) {
        this.cycleProcesses(-1)
      } else if (event.deltaY < 0 && this.props.activeIndex < this.props.processes.length) {
        this.cycleProcesses(1)
      }
      this.timeout = setTimeout(() => this.setState({ delayingScroll: false }), 1000)
    }
  }
  render() {
    let { activeIndex, activeProcess, processes } = this.props
    return (
      <Row onWheel={this.handleWheel.bind(this)}>
        <Col xs={2}>
          <Sidebar
            itemIndex={this.props.activeIndex}
            item={this.props.activeProcess}
            itemType="PROCESS" />
        </Col>
        <Col xs={6} xsOffset={1}>
          <Pager
            imageUrl={activeProcess ? `${process.env.PUBLIC_URL}${activeProcess.image}` : ""}
            leftArrowVisible={activeIndex > 0}
            rightArrowVisible={activeIndex + 1 !== processes.length}
            handleClick={this.cycleProcesses.bind(this)} />
        </Col>
        <Col xs={2} xsOffset={1}>
          <DynamicMenu
            activeIndex={this.props.activeIndex}
            menuItems={[
              {title: "PROCESS", lines: this.props.processes, linkTo: "/process"},
              {title: "VR DEMO", lines: [], linkTo: "/vision"}
            ]}
            handleClick={this.props.changeActiveProcess}
            match={this.props.match} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  processes: state.processes.data,
  activeProcess: state.processes.data[state.processes.activeIndex],
  activeIndex: state.processes.activeIndex,
  leftArrowVisible: state.processes.activeIndex > 0,
  rightArrowVisible: state.processes.data.length > 0 && state.processes.activeIndex + 1 < state.processes.data.length
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeActiveProcess: (index) => dispatch(changeActiveProcess(index)),
    getProcesses: () => dispatch(getProcesses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Process)
