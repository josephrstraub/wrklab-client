import React, { Component } from 'react'

import { connect } from 'react-redux'

import Carousel from 'nuka-carousel'

import PlayerCard from './PlayerCard'

class Team extends Component {
	render() {
		return (
			<Carousel slidesToShow={2.3} wrapAround={true} cellSpacing={50} cellAlign="center" decorators={decorators}>
				{this.props.people.map((person, index) => (
					<PlayerCard key={index} name={person.name} title={person.title} bio={person.bio} />
				))}
			</Carousel>
		)
	}
}

const LeftButton = (props) => <i className="fa fa-angle-left" aria-hidden="true" onClick={props.previousSlide}></i>
const RightButton = (props) => <i className="fa fa-angle-right" aria-hidden="true" onClick={props.nextSlide}></i>

const decorators = [
	{
		component: LeftButton,
		position: 'CenterLeft',
		style: { padding: 20, fontSize: "60px" }
	},
	{
		component: RightButton,
		position: 'CenterRight',
		style: { padding: 20, fontSize: "60px" }
	}
]

const mapStateToProps = (state) => ({
	people: [
		{name: "Person's Name", title: "Person's Title", bio: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."},
		{name: "Person's Name", title: "Person's Title", bio: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."},
		{name: "Person's Name", title: "Person's Title", bio: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."},
		{name: "Person's Name", title: "Person's Title", bio: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}
	]
})

export default connect(mapStateToProps)(Team)