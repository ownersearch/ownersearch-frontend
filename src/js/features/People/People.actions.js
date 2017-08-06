import http from 'axios'

export const getPeople = ({ name, postcode, state, suburb }) => ({
  type: 'PEOPLE/GET_PEOPLE',
  payload: http({
    url: 'api/v1/people',
    params: {
      name,
      postcode,
      state,
      suburb,
    },
  }),
  meta: {
    key: `${name}-${postcode || ''}`,
  },
})
