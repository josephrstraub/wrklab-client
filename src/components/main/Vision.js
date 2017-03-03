import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getVisions } from '../../actions/vision'
import { getViewState, makeKebab } from '../../reducers/visions'

import { Row, Col } from 'react-bootstrap'

import DynamicMenu from './DynamicMenu'
import Sidebar from './Sidebar'

// import '../../styles/Process.css'

class Vision extends Component {
  constructor() {
    super()
    this.changeActiveVision = this.changeActiveVision.bind(this)
  }
  componentDidMount() {
    if (!this.props.visions.length) {
      this.props.getVisions()
    } else {
      this.changeActiveVision(0)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visions.length && !this.props.visions.length) {
      const firstVisionName = nextProps.visions[0].name
      this.props.push(`/vision/${makeKebab(firstVisionName)}`)
    }
  }
  changeActiveVision(index) {
    const clickedVisionName = this.props.visions[index].name
    this.props.push(`/vision/${makeKebab(clickedVisionName)}`)
  }
  render() {
    return (
      <Row>
        <Col xs={2}>
          <Sidebar
            item={this.props.activeVision}
            itemIndex={this.props.activeVisionIndex}
            itemType="VR DEMO" />
        </Col>
        <Col xs={6} xsOffset={1}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EC9VcJfq61I" frameBorder="0" allowFullScreen></iframe>
        </Col>
        <Col xs={2} xsOffset={1}>
          <DynamicMenu
            activeIndex={this.props.activeVisionIndex}
            menuItems={[
              {title: "PROCESS", lines: [], linkTo: "/process"},
              {title: "VR DEMO", lines: this.props.visions, linkTo: "/vision"}
            ]}
            handleClick={this.changeActiveVision} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => getViewState(state, ownProps)

const mapDispatchToProps = (dispatch) => ({
  getVisions: () => dispatch(getVisions())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vision)
