import http from 'axios'
import qs from 'querystring'
import { oauthCreds } from './Auth.config.js'
import { popOauth } from './Auth.utils.js'
import { replace } from 'react-router-redux'
import { SubmissionError } from 'redux-form'
import window from 'window'

export const login = ({ password }) => (dispatch, getState) => dispatch({
  type: 'AUTH/LOGIN',
  payload: http({
    method: 'POST',
    url: 'api/auth/login',
    data: {
      userName: getState().form.loginEmailForm.values.email,
      password,
    },
  }),
})

export const nextLoginStep = () => ({
  type: 'AUTH/NEXT_LOGIN_STEP',
})

export const prevLoginStep = () => ({
  type: 'AUTH/PREV_LOGIN_STEP',
})

export const logout = () => ({
  type: 'AUTH/LOGOUT',
  payload: {},
})


export const register = ({ givenNames, lastName, email, password }) => ({
  type: 'AUTH/REGISTER',
  payload: http({
    method: 'POST',
    url: 'api/users/',
    data: {
      givenNames,
      lastName,
      userName: email,
      password,
      email,
    },
  }),
})

export const updateUser = () => ({
  type: 'AUTH/UPDATE_USER',
  payload: new Promise((resolve) => resolve()),
})

export const registerOrUpdate = (formData) => (dispatch, getState) => {
  const user = getState().auth.user
  return dispatch(user && user.id ? updateUser(formData) : register(formData))
}

export const submitWaitlistForm = (fromData) => ({
  type: 'AUTH/SUBMIT_WAITLIST_FORM',
  payload: http({
    method: 'POST',
    url: `${window.location.origin}/api/v1/boop`,
    data: {
      identify: {
        userId: fromData.email,
        traits: {
          firstName: fromData.firstname,
          lastName: fromData.lastname,
          email: fromData.email,
        },
      },
      track: {
        userId: fromData.email,
        event: 'Registered',
        properties: {
          formUrl: window.location.pathname,
        },
      },
    },
  }),
})


export const sendAuthToken = ({ provider, code }) => (dispatch) => {
  if (oauthCreds[provider]) {
    return dispatch({
      type: 'AUTH/POST_AUTHENTICATE',
      payload: http({
        method: 'GET',
        url: `${oauthCreds[provider].postUrl}?code=${code}`,
      }),
    })
  }
}

export const loadUserData = () => ({
  type: 'AUTH/LOAD_USER_DATA',
  payload: http({
    method: 'GET',
    url: 'api/users/getuser',
  }),
})

export const authenticate = (provider) => (dispatch) => {
  if (oauthCreds[provider]) {
    return dispatch({
      type: 'AUTH/AUTHENTICATE',
      payload: popOauth(`${oauthCreds[provider].url}?${qs.stringify(oauthCreds[provider].params)}`),
    })
    .then(({ value: { code } }) => dispatch(sendAuthToken({ provider, code })))
  }
}

export const updatePassword = ({ email, password, token }) => (dispatch) => dispatch({
  type: 'AUTH/PASSWORD_UPDATE',
  payload: http({
    method: 'POST',
    url: 'api/users/ResetPassword',
    data: {
      email,
      password,
      token,
    },
  }),
}).catch(({ response }) => {
  throw new SubmissionError(response.data.validationErrors || {})
})

export const passwordReset = ({ email }) => (dispatch) => dispatch({
  type: 'AUTH/REQUEST_PASSWORD_RESET',
  payload: http({
    method: 'POST',
    url: 'api/users/ForgotPassword',
    data: {
      Email: email,
    },
  }),
}).catch(({ response }) => {
  throw new SubmissionError(response.data.validationErrors || {})
})


export const registerMember = (formData) => ({
  type: 'AUTH/REGISTER_MEMBER',
  payload: http({
    method: 'POST',
    url: 'api/members/',
    data: {
      dob: formData.dob,
      mobilePhone: formData.mobilePhone,
      gender: formData.gender,
      tfn: formData.tfn,
      resAddress1: formData.resAddress1,
      resSuburb: formData.resSuburb,
      resState: formData.resState,
      resPostcode: formData.resPostcode,
      resCountry: formData.resCountry,
    },
  }),
})


export const getMember = () => (dispatch, getState) => dispatch({
  type: 'AUTH/GET_MEMBER',
  payload: http({
    method: 'GET',
    url: `api/members/${getState().auth.member.id}`,
  }),
})

export const saveMember = (formData) => (dispatch, getState) => dispatch({
  type: 'AUTH/SAVE_MEMBER',
  payload: http({
    method: 'PUT',
    url: 'api/members/',
    data: {
      ...getState().auth.member,
      ...formData,
    },
  }),
})

export const sendEmailVerifyEmail = () => ({
  type: 'AUTH/SEND_EMAIL_VERIFY_EMAIL',
  payload: http({
    method: 'PUT',
    url: 'api/someverificaitonemail/',
  }),
})
