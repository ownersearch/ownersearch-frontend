import { pick } from 'lodash'

const keysToPersist = {
  auth: ['token', 'expiration', 'user', 'member'],
  chat: ['log'],
}

const persistFn = (state, key) => pick(state, keysToPersist[key])

const transform = {
  in: persistFn,
  out: persistFn,
}

export default {
  whitelist: Object.keys(keysToPersist),
  transforms: [transform],
}
