export const modalIsVisible = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return !state
    case 'RESET_MODALS':
      return false
    default:
      return state
  }
}
