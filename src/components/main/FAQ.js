import React, { Component } from 'react'
import { connect } from "react-redux"
import { Panel, Row, Col } from 'react-bootstrap'

import '../../styles/FAQ.css'

const Header = ({ index, isExpanded, question, handleClick }) => (
	<div onClick={handleClick.bind(null, index)}>
		<span>
			{	isExpanded ?
					<i className="fa fa-minus-circle" aria-hidden="true"></i>
				:
					<i className="fa fa-plus-circle" aria-hidden="true"></i>
			}
		</span>
		<h4 className={isExpanded ? "expanded" : "collapsed"}>{question}</h4>
	</div>
)

class FAQ extends Component {
	constructor() {
		super()
		this.state = { panelStates: {} }
		this.handleClick = this.handleClick.bind(this)
	}
	componentDidMount() {
		this.refs.scrollContainer.scrollTop = 25
	}
	handleClick(activeKey) {
		this.setState({
			panelStates: {
				...this.state.panelStates,
				[activeKey]: !this.state.panelStates[activeKey]
			}
		})
	}
	render() {
		return (
			<Row>
				<Col xs={8} xsOffset={2}>
					<div ref="scrollContainer" className="accordion-container">
						{
							this.props.questions.map((question, index) => (
								<Panel
									key={index}
									header={
										<Header
											index={index}
											isExpanded={this.state.panelStates[index]}
											question={question.question}
											handleClick={this.handleClick} />
									}
									collapsible
									expanded={this.state.panelStates[index]}>
								  {question.answer}
								</Panel>
							))
						}
					</div>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => ({
	questions: [
		{
			question: "How's it going?",
			answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
			  collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive 
			  innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
			  At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
			  User generated content in real-time will have multiple touchpoints for offshoring.`
		},
		{
			question: "What's the deal?",
			answer: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional
			  clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
		},		
		{
			question: "How's it going?",
			answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
			  collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive 
			  innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
			  At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
			  User generated content in real-time will have multiple touchpoints for offshoring.`
		},
		{
			question: "What's the deal?",
			answer: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional
			  clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
		},
	]
}) 

export default connect(mapStateToProps)(FAQ)