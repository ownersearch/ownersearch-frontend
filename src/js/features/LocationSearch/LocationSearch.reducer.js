import i from 'icepick'

const initialState = {
  results: [],
  loading: false,
}


export default (state = initialState, action) => {
  switch (action.type) {
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
