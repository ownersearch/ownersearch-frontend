import getUuid from 'utils/getUuid'

export const show = ({ type, title }) => ({
  type: 'TOAST/SHOW',
  payload: {
    id: getUuid(),
    type, // 'error' || default
    title,
  },
})

export const hide = ({ id }) => ({
  type: 'TOAST/HIDE',
  payload: {
    id,
  },
})
