import { createSelector } from 'reselect'

const initialState = {
  data: [],
  activeIndex: 0
}

export const processes = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PROCESSES':
      return {
        data: action.processes,
        activeIndex: 0
      }
    case 'SET_ACTIVE_PROCESS':
      return {
        ...state,
        activeIndex: action.index
      }
    default: return state
  }
}

const getProcesses = (state) => state.processes.data

const getActiveIndex = (state) => state.processes.activeIndex

export const getActiveProcess = createSelector(
  [getProcesses, getActiveIndex],
  (processes, activeIndex) => processes[activeIndex]
)
