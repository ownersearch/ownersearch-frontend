import i from 'icepick'

const initialState = {
  emailUpdatePending: false,
  updatePasswordPending: false,
  
  facebookLoading: false,
  googleLoading: false,

  savePending: false,

  token: null,
  expiration: null,
  user: {},

  member: {},

  loginForm: {
    step: 1,
  },
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH/INIT_HTTP_HEADER':
      return state
    case 'AUTH/LOAD_USER_DATA_FULFILLED':
      return i.chain(state)
        .assoc('user', action.payload.data.user)
        .assoc('member', action.payload.data.zuperMember)
        .value()
    case 'AUTH/SET_AUTH_TOKEN':
      return {...state,
        token: action.payload
      }
    case 'AUTH/REMOVE_AUTH_TOKEN':
      return {...state,
        token: null
      }
    case 'AUTH/POST_AUTHENTICATE_PENDING':
      return {...state,
        facebookLoading: true
      }
    case 'AUTH/POST_AUTHENTICATE_FULFILLED':
      return {...state,
        token: action.payload.data.token,
        facebookLoading: false
      }
    case 'AUTH/POST_AUTHENTICATE_REJECTED':
      return {...state,
        facebookLoading: false
      }    
    
    case 'AUTH/POST_AUTHENTICATE_PENDING':
      return i.assoc(state, 'facebookLoading', true)
    case 'AUTH/POST_AUTHENTICATE_REJECTED':
      return i.assoc(state, 'facebookLoading', false)


    case 'AUTH/GET_TOKEN_FULFILLED':
      return {...state,
        token: action.payload.data.token,
      }

    case 'AUTH/UNLINK_FULFILLED':
      return i.assocIn(state, ['user', 'accounts'], action.payload.data.accounts)

    case 'AUTH/NEXT_LOGIN_STEP':
      return i.assocIn(state, ['loginForm', 'step'], state.loginForm.step + 1)
    case 'AUTH/PREV_LOGIN_STEP':
      return i.assocIn(state, ['loginForm', 'step'], state.loginForm.step - 1)
    case 'AUTH/LOGIN_FULFILLED':
      return i.chain(state)
        .assoc('expiration', action.payload.data.expiration)
        .assoc('token', action.payload.data.token)
        .assoc('user', action.payload.data.user)
        .assoc('member', action.payload.data.zuperMember)
        .value()

    case 'AUTH/REGISTER_FULFILLED':
      return i.chain(state)
        .assoc('expiration', action.payload.data.expiration)
        .assoc('token', action.payload.data.token)
        .assoc('user', action.payload.data.user)
        .assoc('member', action.payload.data.zuperMember)
        .value()    
          
    case 'AUTH/UPDATE_EMAIL_PENDING':
      return {...state,
        emailUpdatePending: true
      }
    case 'AUTH/UPDATE_EMAIL_FULFILLED':
      return {...state,
        emailUpdatePending: false,
      }
    case 'AUTH/UPDATE_EMAIL_REJECTED':
      return {...state,
        emailUpdatePending: false,
      }

    case 'AUTH/UPDATE_USER':
      return {...state,
        user: action.payload.user,
      }

    case 'AUTH/LOGOUT':
      return Object.assign({}, state, initialState);

    default:
        return state;
  }
}
