import React, { Component } from 'react'
import { Link } from 'react-router'
import Shuffle from 'react-shuffle'

class DynamicMenuLines extends Component {
  constructor(props) {
	super(props)
	this.state = { lines: this.initLines(props.activeIndex, props.lines) }
  }
  componentWillReceiveProps(nextProps) {
  	if (nextProps.activeIndex !== this.props.activeIndex) {
  		this.shuffleLines(nextProps.activeIndex)
  	}
  }
  initLines(activeIndex, lines) {
	return lines.map((line, index) => ({
		id: line._id,
		isActive: index === activeIndex 
	}))
  }
  shuffleLines(nextActiveIndex) {
	let currentActiveIndex = this.state.lines.findIndex(line => line.isActive)
	let lines
	if (currentActiveIndex > nextActiveIndex) {
	  lines = [
		...this.state.lines.slice(0, nextActiveIndex),
		this.state.lines[currentActiveIndex],
		...this.state.lines.slice(nextActiveIndex, currentActiveIndex),
		...this.state.lines.slice(currentActiveIndex + 1)
	  ]
	} else if (currentActiveIndex < nextActiveIndex) {
	  lines = [
		...this.state.lines.slice(0, currentActiveIndex),
		...this.state.lines.slice(currentActiveIndex + 1, nextActiveIndex + 1),
		this.state.lines[currentActiveIndex],
		...this.state.lines.slice(nextActiveIndex + 1)
	  ]
	}
	this.setState({ lines: lines || this.state.lines })
  }
  render() {
	return (
		<ul>
			<Shuffle duration={300} fade={false} scale={false} initial={false}>
				{
					this.state.lines.map((line, index) => (
					  <li key={line.id}>
						<div
							className={`line ${line.isActive ? "long" : "short"}`}
							onClick={this.props.handleClick.bind(null, index)} />
					  </li>
					))
				}
			</Shuffle>
		</ul>
	)
  }
}

export default DynamicMenuLines