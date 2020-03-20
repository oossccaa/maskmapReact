import { SET_MAPS } from './actionType.js'

const initState = {
  maps: []
}


const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MAPS:
      return {
        ...state,
        maps: action.maps
      }
    default:
      return state
  }
}


export default reducer
