import i from 'icepick'

const initialState = {
  results: [],
  query: {
    string: '',
    components: {},
    coords: {
      lat: '',
      lng: '',
    },
  },
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOCATON_SEARCH/SET_QUERY':
      return i.chain(state)
        .assocIn(['query', 'string'], action.payload.string)
        .assocIn(['query', 'components'], action.payload.components)
        .assocIn(['query', 'coords'], action.payload.coords)
        .value()

    case 'LOCATON_SEARCH/SEARCH_PENDING':
      return i.chain(state)
        .assoc('loading', true)
        .value()

    case 'LOCATON_SEARCH/SEARCH_FULFILLED':
      return i.chain(state)
        .assoc('results', action.payload.data)
        .assoc('loading', false)
        .value()

    case 'LOCATON_SEARCH/SEARCH_REJECTED':
      return i.chain(state)
        .assoc('loading', false)
        .value()

    default:
      return state
  }
}
