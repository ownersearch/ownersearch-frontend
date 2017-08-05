import i from 'icepick'

const initialState = {
  accounts: [],
  supertick: false,
  form: {
    terms: false,
    selected: {
      // id: true || false
    },
    range: {
      // id: value 0-100
    },
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUPER_ANN/SUPER_TICK_FULFILLED': {
      return i.assoc(state, 'supertick', action.payload.data.message)
    }
    case 'SUPER_ANN/SUPER_TICK_REJECTED': {
      return i.assoc(state, 'supertick', action.payload.data.message)
    }
    case 'SUPER_ANN/GET_SUPER_FUNDS_FULFILLED': {
      return i.assoc(state, 'accounts', action.payload.data.superFunds)
    }
    default:
      return state
  }
}
