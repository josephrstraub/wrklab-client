import React from 'react'

import { connect } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

const PrivacyPolicy = (props) => (
	<Row>
		<Col xs={8} xsOffset={2} style={{overflowY: "auto", height: "400px", textAlign: "left", marginTop: "80px"}}>
			<h4 style={{color: "#FF1FA9", marginBottom: "25px", fontSize: "1.1em"}}>Wrklab Privacy Policy</h4>
			{ 
				props.policies.map((policy, index) => (
					<div key={index} style={{textAlign: "left", marginBottom: "20px"}}>
						<h4 style={{fontSize: "1.1em", marginBottom: 0}}>{policy.title}</h4>
						<p style={{color: "rgba(0,0,0,.4)", paddingTop: 0}}>{policy.text}</p>
					</div>
				))
			}
		</Col>
	</Row>
) 

const mapStateToProps = (state) => ({
	policies: [
		{
			title: "Personal identification information",
			text: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.			
				Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
				Butcher activated charcoal paleo copper mug, fap meh letterpress tbh. Blue bottle celiac four dollar toast, heirloom brooklyn normcore affogato pickled four loko semiotics seitan health goth brunch enamel pin post-ironic. Crucifix jianbing stumptown farm-to-table, deep v paleo vexillologist. Kale chips four dollar toast sriracha cold-pressed single-origin coffee woke. Pug taxidermy mustache, tumblr pok pok la croix kitsch four loko street art chicharrones flexitarian brunch mumblecore vape cliche. Disrupt man bun kitsch, iPhone shoreditch raw denim cardigan. Raclette green juice helvetica lumbersexual viral kale chips.`
		},
		{
			title: "Non-personal identification information",
			text: "Green juice freegan 8-bit, locavore brunch enamel pin vaporware lomo snackwave thundercats shoreditch deep v XOXO man bun. Hella portland wolf neutra kickstarter hexagon tbh sartorial farm-to-table, prism vice. Pork belly banjo vegan retro, offal cornhole authentic sartorial. Polaroid la croix fap twee, hella bushwick cold-pressed put a bird on it bitters asymmetrical tousled. Humblebrag tbh mustache, listicle cred iceland kale chips leggings meggings vegan. Pickled four loko master cleanse synth, organic cardigan sriracha you probably haven't heard of them beard. Selvage meggings fanny pack, ethical tousled gentrify messenger bag vaporware."
		},
		{
			title: "Web browser cookies",
			text: "Vexillologist occupy ethical humblebrag. Tumblr iPhone chia kinfolk deep v. Umami letterpress raw denim, cliche williamsburg activated charcoal tacos disrupt microdosing tbh narwhal lyft YOLO. Mumblecore vaporware bitters, enamel pin tilde hella chia. +1 echo park asymmetrical locavore, mumblecore letterpress selfies shabby chic bicycle rights bushwick church-key whatever tilde. IPhone plaid cred offal photo booth semiotics. Small batch celiac pok pok gochujang banh mi health goth."
		}
	]
})

export default connect(mapStateToProps)(PrivacyPolicy)