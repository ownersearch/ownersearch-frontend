import i from 'icepick'

const initialState = {

}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE/GET_PEOPLE_PENDING':
      return i.chain(state)
        .assocIn([action.meta.key, 'loading'], true)
        .value()

    case 'PEOPLE/GET_PEOPLE_FULFILLED':
      return i.chain(state)
        .assocIn([action.meta.key, 'data'], action.payload.data)
        .assocIn([action.meta.key, 'loading'], false)
        .value()

    case 'PEOPLE/GET_PEOPLE_REJECTED':
      return i.chain(state)
        .assocIn([action.meta.key, 'loading'], false)
        .value()

    default:
      return state
  }
}
