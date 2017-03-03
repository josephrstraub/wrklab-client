import React, { Component } from 'react'

import { connect } from 'react-redux'

import { changeActiveProcess } from '../../actions/process'

import Shuffle from 'react-shuffle'

import '../../styles/ProgressMeter.css'

class ProgressMeter extends Component {
  constructor() {
    super()
    this.state = { circles: [] }
    this.shuffleProcesses = this.shuffleProcesses.bind(this)
  }
  componentDidMount() {
    let circles = this.props.processes.reduce((acc, process, index) => {
      if (index + 1 !== this.props.processes.length) {
        let newItems = ['a', 'b', 'c'].map((item, i) => ({ id: `${process._id}${item}`, isTiny: i !== 0, isActive: index === 0 && i === 0 }))
        return [ ...acc, ...newItems ]
      } else {
        return [ ...acc, { id: `${process._id}a`, isTiny: false, isActive: false } ]
      }
    }, [])
    this.setState({ circles })
  }
  componentWillUnmount() {
    this.props.changeActiveProcess(0)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.processes.length !== this.props.processes.length) {
      let circles = nextProps.processes.reduce((acc, process, index) => {
        if (index + 1 !== nextProps.processes.length) {
          let newItems = ['a', 'b', 'c'].map((item, i) => ({ id: `${process._id}${item}`, isTiny: i !== 0, isActive: index === 0 && i === 0 }))
          return [ ...acc, ...newItems ]
        } else {
          return [ ...acc, { id: `${process._id}a`, isTiny: false, isActive: false } ]
        }
      }, [])
      this.setState({ circles })
    } else if (nextProps.activeIndex !== this.props.activeIndex) {
      let index = nextProps.activeIndex * 3
      this.shuffleProcesses(index)
    }
  }
  shuffleProcesses(index) {
    let currentActiveIndex = this.state.circles.findIndex(circle => circle.isActive)
    let circles
    if (currentActiveIndex > index) {
      circles = [
        ...this.state.circles.slice(0, index),
        this.state.circles[currentActiveIndex],
        ...this.state.circles.slice(index, currentActiveIndex).reduce((acc, cur, i) => {
          return i % 3 !== 0 ? [ ...acc.slice(0, i - 1), cur, ...acc.slice(i - 1) ] : [ ...acc, cur ]
        }, []),
        ...this.state.circles.slice(currentActiveIndex + 1)
      ]
    } else if (currentActiveIndex < index) {
      circles = [
        ...this.state.circles.slice(0, currentActiveIndex),
        ...this.state.circles.slice(currentActiveIndex + 1, index + 1).reduce((acc, cur, i) => {
          return (i + 1) % 3 === 0 ? [ ...acc.slice(0, i - 2), cur, ...acc.slice(i - 2) ] : [ ...acc, cur ]
        }, []),
        this.state.circles[currentActiveIndex],
        ...this.state.circles.slice(index + 1)
      ]
    }
    this.setState({ circles: circles || this.state.circles })
  }
  render() {
    let { processes, changeActiveProcess } = this.props
    return (
      <div className="progress-meter" style={{textAlign: "center"}}>
        <Shuffle duration={300} fade={false} scale={false} initial={false}>
          {this.state.circles.map((circle, index) => {
            if (circle.isTiny) return <div key={circle.id} className="tiny"></div>
            return (
              <div key={circle.id} style={{display: "inline-block"}}>
                  <div
                    className={`progress-circle ${circle.isActive ? "active-process" : ""}`}
                    onClick={changeActiveProcess.bind(this, index / 3)}>
                    <div className="inner-circle"></div>
                  </div>
              </div>
            )
          })}
        </Shuffle> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeIndex: state.processes.activeIndex,
  processes: state.processes.data
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveProcess: (index) => dispatch(changeActiveProcess(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressMeter)
