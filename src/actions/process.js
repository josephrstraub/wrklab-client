import axios from 'axios'

export const getProcesses = () => {
  return axios.get('/api/processes')
    .then(response => ({
      type: 'RECEIVE_PROCESSES',
      processes: response.data
    }))
    .catch(error => console.log(error))
}

export const changeActiveProcess = (index) => ({
  type: 'SET_ACTIVE_PROCESS',
  index
})