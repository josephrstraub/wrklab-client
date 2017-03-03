import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { processes } from './processes'
import { featuredProjects } from './featured-projects'
import { products } from './products'
import { mainMenuIsVisible } from './main-menu'
import { modalIsVisible } from './modal'
import { visions } from './visions'
import { previousLocation } from './location'



const wrklabApp = combineReducers({
  processes,
  products,
  visions,
  featuredProjects,
  form: formReducer,
  mainMenuIsVisible,
  modalIsVisible,
  previousLocation
})

export default wrklabApp
