import http from 'axios'

export const search = ({ subPremise, streetNum, route, suburb, state, postcode, country }) => ({
  type: 'LOCATON_SEARCH/SEARCH',
  payload: http({
    url: 'api/v1/search',
    params: {
      subPremise,
      streetNum,
      route,
      suburb,
      state,
      postcode,
      country,
    },
  }),
})
