import http from 'axios'

export default (store) => {
  // Setup the http interceptor
  http.interceptors.request.use((config) => {
    const token = store.getState().auth.token

    // We set Authorization to null to bypass
    if (config.headers.Authorization === null) {
      delete config.headers.Authorization
    } else if (!config.headers.Authorization) {
      config.headers.Authorization = token ? `bearer ${token}` : ''
    }
    return config
  })
  
  http.defaults.baseURL = `${GLOBAL_ENV.API_SERVER}/`
}