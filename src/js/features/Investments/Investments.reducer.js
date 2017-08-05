import i from 'icepick'

const initialState = {
  form: {
    questions: {
      // These are used with data/investmentQuestions
      // 1: undefined,
      // 2: undefined,
    },
    selected: {
      // id: true || false
    },
    terms: false,
    loading: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INVESTMENTS/SUBMIT_PENDING': {
      return i.assocIn(state, ['form', 'loading'], true)
    }
    case 'INVESTMENTS/SUBMIT_REJECTED': {
      return i.assocIn(state, ['form', 'loading'], false)
    }
    case 'INVESTMENTS/SUBMIT_FULFILLED': {
      return i.assocIn(state, ['form', 'loading'], false)
    }
    default:
      return state
  }
}
