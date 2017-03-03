export const mainMenuIsVisible = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_MAIN_MENU':
      return !state
    case 'RESET_MODALS':
    	return false
    default:
      return state
  }
}
