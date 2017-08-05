import http from 'axios'

export const superTick = () => ({
  type: 'SUPER_ANN/SUPER_TICK',
  payload: http({
    method: 'POST',
    url: 'api/rollovers/supertick',
  }),
})

export const getSuperFunds = () => ({
  type: 'SUPER_ANN/GET_SUPER_FUNDS',
  payload: http({
    method: 'POST',
    url: 'api/rollovers/getsuperfunds',
  }),
})
