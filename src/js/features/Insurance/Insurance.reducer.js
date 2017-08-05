import i from 'icepick'

const initialState = {
//  form: {
//    questions: {
//      // These are used with data/insuranceQuestions
//      // 1: undefined,
//      // 2: undefined,
//    },
//    terms: false,
//    loading: false,
//  },
  confirm: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INSURANCE/SUBMIT_PENDING': {
      return i.assocIn(state, ['form', 'loading'], true)
    }
    case 'INSURANCE/SUBMIT_REJECTED': {
      return i.assocIn(state, ['form', 'loading'], false)
    }
    case 'INSURANCE/SUBMIT_FULFILLED': {
      return i.assocIn(state, ['form', 'loading'], false)
    }
    default:
      return state
  }
}
