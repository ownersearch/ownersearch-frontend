import qs from 'querystring'
import window from 'window'

export const popOauth = (url) => new Promise((resolve, reject) => {
  const getPosition = (w, h) => ({
    left: (screen.width / 2) - (w / 2),
    top: (screen.height / 2) - (h / 2),
  })
  
  console.log(url)

  const interval = 500
  const width = 780
  const height = 410
  const position = getPosition(width, height)
  const options = `width=${width},height=${height},toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0,left=${position.left},top=${position.top}`
  const signinWin = window.open(url, 'SignIn', options)

  const check = () => {
    // if you access signinWin.location.search directly, chrome will throw CORS error
    // so get the keys and check for the existance of search before accessing it
    const query = Object.keys(signinWin.location).includes('search')
      ? signinWin.location.search.substr(1)
      : ''
    
    const queryParams = qs.parse(query)
    if (queryParams.code) {
      resolve(queryParams)
      signinWin.close()
    } else if (signinWin.closed) {
      reject('Window Closed')
    } else {
      setTimeout(check, interval)
    }
  }

  setTimeout(check, interval)
  signinWin.focus()
})
