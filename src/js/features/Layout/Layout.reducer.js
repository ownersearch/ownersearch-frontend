import i from 'icepick'

const initialState = {
  header: false, // 'landing' || 'app' || false
  menuOpen: false,
  headerTitle: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LAYOUT/SET_LAYOUT':
      // We extend by header so we keep the last header state if nothing is defined
      return Object.assign({}, initialState, { header: state.header }, action.payload)
    case 'LAYOUT/SET_LAYOUT_MERGE':
      return Object.assign({}, state, action.payload)
    case 'LAYOUT/TOGGLE_MENU':
      return {
        ...state,
        menuOpen: action.payload || !state.menuOpen,
      }
    default:
      return state
  }
}
