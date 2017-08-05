import http from 'axios'

export const search = ({ address }) => ({
  type: 'LOCATON_SEARCH/SEARCH',
  payload: http({
    url: 'api/v1/search',
    params: {
      address,
    },
  }),
})
