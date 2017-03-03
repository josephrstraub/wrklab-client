import { createSelector } from 'reselect'

const initialState = { data: [] }

export const visions = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_VISIONS': return { data: action.visions }
    default: return state
  }
}

const getVisions = (state) => state.visions.data

const getParam = (state, props) => props.match.params.visionName

export const makeKebab = (str) => str.replace(/\s/g, "-").toLowerCase()

export const getActiveIndex = createSelector(
  [getParam, getVisions],
  (param, visions) => visions.findIndex(vision => makeKebab(vision.name) === param)
)

export const getActiveVision = createSelector(
  [getParam, getVisions],
  (param, visions) => visions.find(vision => makeKebab(vision.name) === param)
)

//for the main section
export const getViewState = createSelector(
  [getActiveVision, getActiveIndex, getVisions ],
  (activeVision, activeVisionIndex, visions) => {
    if (activeVisionIndex < 0) { return { visions } }
    return {
      activeVision,
      activeVisionIndex,
      visions
    }
  }
)
