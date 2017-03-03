import React, { Component } from 'react'

import { connect } from 'react-redux'
import { changeActiveFeaturedProjectImage, getFeaturedProjects } from '../../actions/featured'
import { getViewState, makeKebab } from '../../reducers/featured-projects'

import { Col, Row } from 'react-bootstrap'

import DynamicMenu from './DynamicMenu'
import Pager from './Pager'
import Sidebar from './Sidebar'

class Featured extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.changeActiveProject = this.changeActiveProject.bind(this)
  }
  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.getFeaturedProjects()
    } else {
      this.changeActiveProject(0)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.projects.length && !this.props.projects.length) {
      const firstProjectName = nextProps.projects[0].name
      this.props.push(`/featured/${makeKebab(firstProjectName)}`)
    }
  }
  handleClick(increment) {
    this.props.changeActiveImageIndex(this.props.activeImageIndex + increment)
  }
  changeActiveProject(index) {
    const clickedProjectName = this.props.projects[index].name
    this.props.push(`/featured/${makeKebab(clickedProjectName)}`)
  }
  render() {
    return (
      <Row>
        <Col xs={2}>
          <Sidebar
            item={this.props.activeProject}
            itemIndex={this.props.activeProjectIndex}
            itemType="FEATURED" />
        </Col>
        <Col xs={6} xsOffset={1}>
          <Pager
            imageUrl={process.env.PUBLIC_URL + this.props.imageUrl}
            leftArrowVisible={this.props.leftArrowVisible}
            rightArrowVisible={this.props.rightArrowVisible}
            handleClick={this.handleClick} />
        </Col>
        <Col xs={2} xsOffset={1}>
          <DynamicMenu
            activeIndex={this.props.activeProjectIndex}
            menuItems={[
              {title: "FEATURED", lines: this.props.projects, linkTo: "/featured"},
              {title: "PRODUCTS", lines: [], linkTo: "/products"}
            ]}
            handleClick={this.changeActiveProject} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => getViewState(state, ownProps)

const mapDispatchToProps = (dispatch) => ({
  changeActiveImageIndex: (index) => dispatch(changeActiveFeaturedProjectImage(index)),
  getFeaturedProjects: () => dispatch(getFeaturedProjects())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured)
