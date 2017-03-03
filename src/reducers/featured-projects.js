import { createSelector } from 'reselect'

const initialState = {
  data: [],
  activeImageIndex: 0
}

export const featuredProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_FEATURED_PROJECTS':
      return {
        ...state,
        data: action.featuredProjects
      }
    case 'SET_ACTIVE_FEATURED_PROJECT_IMAGE':
      return {
        ...state,
        activeImageIndex: action.index
      }
    default: return state
  }
}

const getActiveImageIndex = (state) => state.featuredProjects.activeImageIndex

const getProjects = (state) => state.featuredProjects.data

const getParam = (state, props) => props.match.params.projectName

export const makeKebab = (str) => str.replace(/\s/g, "-").toLowerCase()

const getActiveIndex = createSelector(
  [getParam, getProjects],
  (param, projects) => projects.findIndex(project => makeKebab(project.name) === param)
)

const getActiveProject = createSelector(
  [getParam, getProjects],
  (param, projects) => projects.find(project => makeKebab(project.name) === param) || {}
)

export const getImages = createSelector(
  [getActiveProject, getProjects],
  (activeProject, projects) => activeProject.images || []
)

//for the main section
export const getViewState = createSelector(
  [getActiveImageIndex, getActiveProject, getActiveIndex, getProjects ],
  (activeImageIndex, activeProject, activeProjectIndex, projects) => {
    if (activeProjectIndex < 0) { return { projects } }
    return {
      activeImageIndex,
      activeProject,
      activeProjectIndex,
      projects, 
      imageUrl: activeProject.images[activeImageIndex],
      leftArrowVisible: activeImageIndex > 0,
      rightArrowVisible: projects.length > 0 && activeImageIndex + 1 < activeProject.images.length
    }
  }
)
