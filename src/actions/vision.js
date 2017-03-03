import axios from 'axios'

export const getVisions = () => {
  return axios.get('/api/visions')
    .then(response => ({
      type: 'RECEIVE_VISIONS',
      visions: response.data
    }))
    .catch(error => console.log(error))
}