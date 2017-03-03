export const previousLocation = (state = "/", action) => {
	switch(action.type) {
		case 'SET_PREVIOUS_LOCATION': return action.location
		default: return state
	}
}