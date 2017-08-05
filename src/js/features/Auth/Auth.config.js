import window from 'window'

const rootDomain = window.location.origin

export const oauthCreds = {
  facebook: {
    url                   : 'https://www.facebook.com/v2.6/dialog/oauth',
    postUrl               : '/api/auth/fbcode',
    params                : {
      redirect_uri        : `${rootDomain}/api/v1/auth/redirect`,
      client_id           : '1930212027222223',
      scope               : 'public_profile,email',
      response_type       : 'code',
    },
  },
  google: {
    url                   : 'https://accounts.google.com/o/oauth2/v2/auth',
    postUrl               : `/api/v1/auth/google`,
    params                : {
      access_type         : 'offline',
      redirect_uri        : `${rootDomain}/api/v1/auth/redirect`,
      response_type       : 'code',
      prompt              : 'consent', // forces request of refresh token
      client_id           : '502305750839-8m9aian8ka9qb6j64t3dtjs2nq96tdae.apps.googleusercontent.com',
      scope               : 'openid profile email https://www.googleapis.com/auth/drive',
    },
  },
}
