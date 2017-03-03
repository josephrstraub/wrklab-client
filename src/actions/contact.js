import axios from 'axios'

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
})

export const submitContactForm = (formData) => (dispatch, getState) => {
  return axios.post('/send', formData).then(response => {
    setTimeout(() => {
      if (getState().modalIsVisible) { dispatch({ type: 'TOGGLE_MODAL' }) }
    }, 4000)
  })
}