
const initialState = {
  position: 0,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SCROLL/UPDATE_POSITION':
      return {
        ...state,
        position: action.payload,
      }
    default:
      return state
  }
}
