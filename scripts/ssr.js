const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const config = require('../config/webpack.config.ssr')
const fs = require('fs')

const compiler = webpack(config)
compiler.apply(new DashboardPlugin())

compiler.run((err, stats) => {
  process.exit()
})
