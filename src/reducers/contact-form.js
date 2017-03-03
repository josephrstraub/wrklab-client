const initialState = {
	fields: {
		location: { value: "", isValid: false },
		name: {value: "", isValid: false},
		email: {value: "", isValid: false},
		phone: {value: "", isValid: false},
		organization: {value: "", isValid: false},
		message: {value: "", isValid: true}
	},
	submitFailed: false
}

export const contactForm = (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE_FORM':
			return {
				...state,
				fields: {...state.fields, ...action.updatedField}
			}
		case 'TOGGLE_MODAL':
			return initialState
		case 'FAILED_SUBMIT':
			return {
				...state,
				submitFailed: true
			}
		case 'RESET_FORM':
			return initialState
		case 'RECIEVE_USER_LOCATION':
			return {
				...state,
				fields: {...state.fields, location: {value: action.location, isValid: true}}
			}
		default:
			return state
	}
}