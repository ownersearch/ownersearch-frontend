import jump from './jump.js'

export default (el, options) => {
  return jump(el, {
    offset: -60,
    container: '#scrollContainer',
    ...options,
  })
}
