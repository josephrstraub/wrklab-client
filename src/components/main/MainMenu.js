import React, { Component } from 'react'

import { connect } from 'react-redux'

import ReactTransitionGroup from 'react-addons-transition-group'
import ScrollArea from 'react-scrollbar'
import { Row, Col } from 'react-bootstrap'

import Content from './Content'
import ToggleScrollChip from './ToggleScrollChip'

import '../../styles/MainMenu.css'

class Overlay extends Component {
  componentWillAppear(cb) {
    this.refs.overlay.className = "main-menu-layer-appear"
    setTimeout(cb, 1)
  }
  componentDidAppear() {
    this.refs.overlay.className = "main-menu-layer-appear main-menu-layer-appear-active"
    this.refs.overlay.addEventListener("transitionend", (e) => {
      this.props.showHiddenBars()
      this.refs.overlay.style.display = "none"
    })
  }
  componentDidMount() {
    this.refs.scrollBody1.scrollTop = 60
    this.refs.scrollBody2.scrollTop = 60
    this.refs.scrollBody3.scrollTop = 60
  }
  render() {
    return (
      <div ref="overlay" style={{display: "flex", position: "relative"}}>
        <div ref="scrollBody1" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll", overflowX: "hidden"}}>
          <Content columnNumber="ONE" previousLocation={this.props.previousLocation} className="hidden" />
        </div>        
        <div ref="scrollBody2" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll", overflowX: "hidden"}}>
          <Content columnNumber="TWO" previousLocation={this.props.previousLocation} className="hidden" />
        </div>        
        <div ref="scrollBody3" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "hidden", overflowX: "hidden"}}>
          <Content columnNumber="THREE" previousLocation={this.props.previousLocation} className="hidden" />
        </div>
      </div>
    )
  }
}

class MainMenu extends Component {
  constructor() {
    super()
    this.state = { scrolling: null, top: true }
    this.handleWheel = this.handleWheel.bind(this)
    this.scrollDown = this.scrollDown.bind(this)
    this.scrollUp = this.scrollUp.bind(this)
  }
  componentDidMount() {
    this.refs.scrollBody1.scrollTop = 60
    this.refs.scrollBody2.scrollTop = 60
    this.refs.scrollBody3.scrollTop = 60
    this.refs.scrollBody1.classList.add("hidden-bar")
    this.refs.scrollBody2.classList.add("hidden-bar")
  }
  scrollDown() {
    if (this.state.scrolling !== "up") {
      this.setState({ scrolling: "down" })
      let currentPosition = this.refs.scrollBody1.scrollTop
      if (currentPosition < 440) {
          this.refs.scrollBody1.scrollTop = Math.min(currentPosition + 15, 440)
          this.refs.scrollBody2.scrollTop = Math.min(currentPosition + 15, 440)
          this.refs.scrollBody3.scrollTop = Math.min(currentPosition + 15, 440)
          setTimeout(this.scrollDown, 10)
      } else {
        this.setState({ scrolling: null, top: false })
      }
    }
  }  
  scrollUp() {
    if (this.state.scrolling !== "down") {
      this.setState({ scrolling: "up" })
      let currentPosition = this.refs.scrollBody1.scrollTop
      if (currentPosition > 60) {
          this.refs.scrollBody1.scrollTop = Math.max(currentPosition - 15, 60)
          this.refs.scrollBody2.scrollTop = Math.max(currentPosition - 15, 60)
          this.refs.scrollBody3.scrollTop = Math.max(currentPosition - 15, 60)
          setTimeout(this.scrollUp, 10)
      } else {
        this.setState({ scrolling: null, top: true })
      }
    }
  }
  handleWheel(event) {
    if (event.deltaY > 0) {
      this.scrollDown()
    } else if (event.deltaY < 0) {
      this.scrollUp()
    }
  }
  showHiddenBars() {
    this.refs.scrollBody1.classList.remove("hidden-bar")
    this.refs.scrollBody2.classList.remove("hidden-bar")
  }
  render() {
    return (
      <Row className="main-menu" style={{paddingTop: "80px"}} onWheel={this.handleWheel}>
        <Col xs={8} xsOffset={2}>
          <div style={{display: "flex", position: "relative"}}>
            <ToggleScrollChip isVisible={true} top={this.state.top} scrollDown={this.scrollDown} scrollUp={this.scrollUp} />
            <div ref="scrollBody1" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll", overflowX: "hidden"}} onWheel={(event) => event.preventDefault()}>
              <Content columnNumber="ONE" previousLocation={this.props.previousLocation} toggleMainMenu={this.props.toggleMainMenu} />
            </div>        
            <div ref="scrollBody2" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "scroll", overflowX: "hidden"}} onWheel={(event) => event.preventDefault()}>
              <Content columnNumber="TWO" previousLocation={this.props.previousLocation} toggleMainMenu={this.props.toggleMainMenu} />
            </div>        
            <div ref="scrollBody3" className="scroll-area" style={{flex: 1, height: "400px", overflowY: "hidden", overflowX: "hidden"}}>
              <Content columnNumber="THREE" previousLocation={this.props.previousLocation} toggleMainMenu={this.props.toggleMainMenu} />
            </div>
          </div>
        </Col>
        <Col className="main-menu-layer-2" xs={8} xsOffset={2} style={{position: "absolute", top: "80px"}}>
          <ReactTransitionGroup transitionName="main-menu-layer">
            <Overlay previousLocation={this.props.previousLocation} showHiddenBars={this.showHiddenBars.bind(this)}/>
          </ReactTransitionGroup>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ previousLocation }) => ({ previousLocation })

export default connect(mapStateToProps)(MainMenu)
