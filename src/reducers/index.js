const maps = (state = [], action) => {
  switch (action.type) {
    case 'GET_MAPS':
      return state.map
    case 'SET_MAPS':
      return 
    default:
      return state
  }
}

export default maps