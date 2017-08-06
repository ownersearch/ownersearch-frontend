import http from 'axios'

export const getPeople = ({ name }) => ({
  type: 'PEOPLE/GET_PEOPLE',
  payload: http({
    url: 'api/v1/people',
    params: {
      name,
    },
  }),
  meta: {
    key: name,
  },
})
