// Creates a hot reloading development environment
const path = require('path')
const http = require('http')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')
const config = require('../config/webpack.config.development')
const httpProxy = require('http-proxy')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3001

// Start some stuff
const app = express()
const compiler = webpack(config)
const server = http.createServer(app)
const apiProxy = httpProxy.createProxyServer()

server.listen(port, (err) => {
  if (err) {
    log(err)
    return
  }
  log('🚧  App is listening at https://%s:%s', host, port)
})

// Apply CLI dashboard for your webpack dev server
compiler.apply(new DashboardPlugin())

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunkModules: true,
  },
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler))

app.use('/api/*', (req, res) => {
  req.url = req.baseUrl
  apiProxy.web(req, res, {
    target: {
      port: 3000,
      host: 'localhost',
    },
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})


function log() {
  arguments[0] = '\nWebpack: ' + arguments[0]
  console.log.apply(console, arguments)
}

