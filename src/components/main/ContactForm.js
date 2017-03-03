import React, { Component } from 'react'

import { submitContactForm } from '../../actions/contact'

import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// validation functions
const required = value => value == null ? 'Required' : undefined
const email = value => value &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined


const underlyingDivStyles = {
	width: "100%",
	height: "66px",
	lineHeight: "17px",
	margin: "5px 0"
}

const lastItemStyles = {
	margin: "20px 0 5px 0"
}

const messageStyles = {
	textAlign: "left",
	bottom: "12px",	
	transform: "scale(0.75) translate(0px, -100px)"
}


class ContactForm extends Component {
  componentDidMount() {
	this.refs.name            // the Field
	  .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
	  .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
	  .focus()                // on TextField
  }

  render() {
	const { handleSubmit, pristine, reset, submitting } = this.props
	let fields = [
    {type: "text", floatingLabel: "Name", color: "#FF1FA9", name: "name", requirement: required},
    {type: "email", floatingLabel: "Email", color: "#4EDFFF", name: "email", requirement: [required, email]},
    {type: "tel", floatingLabel: "Phone", color: "#4F1452", name: "phone", requirement: required},
    {type: "text", floatingLabel: "Organization Name", color: "#16D400", name: "organization", requirement: required},
    {type: "text", floatingLabel: "Message (optional)", color: "#0e7201", name: "message", hintText: "Message", requirement: false}
  ]
	return (
		<MuiThemeProvider>
		  <form onSubmit={handleSubmit}>
		  	{ fields.map((field, index) => (
						<div key={index} style={{width: "95%", margin: "0 auto"}}>
						  <Field name={field.name}
							component={TextField}
							type={field.type}
							hintText={field.hintText || field.floatingLabel}
							floatingLabelText={field.floatingLabel}
							floatingLabelStyle={{color: field.color, fontSize: ".75em", top: "20px"}}
							underlineStyle={{color: field.color}}
							underlineFocusStyle={{borderColor: field.color}}
							validate={field.requirement}
							ref={field.name}
							withRef
							multiLine={field.name === "message"}
							rows={4}
							rowsMax={4}
							inputStyle={{color: field.color, fontWeight: "100"}}
							textAreaStyle={{color: field.color, fontWeight: "100"}}
							style={Object.assign(
								{},
								underlyingDivStyles,
								index === fields.length - 1 ? lastItemStyles : {},
								field.name === "message" ? messageStyles : {}
							)} />
						</div>
					))
				}
		  </form>
		</MuiThemeProvider>
	)
  }
}

export default reduxForm({
  form: 'ContactForm',
  onSubmit: (values, dispatch) => dispatch(submitContactForm(values))
})(ContactForm)