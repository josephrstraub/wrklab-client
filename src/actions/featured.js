import axios from 'axios'

export const getFeaturedProjects = () => {
  return axios.get('/api/featured-projects')
    .then(response => ({
      type: 'RECEIVE_FEATURED_PROJECTS',
      featuredProjects: response.data
    }))
    .catch(error => console.log(error))
}

export const changeActiveFeaturedProjectImage = (index) => ({
  type: 'SET_ACTIVE_FEATURED_PROJECT_IMAGE',
  index
})