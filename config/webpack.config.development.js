const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.config.base')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
  GLOBAL_ENV: {
    NODE_ENV: JSON.stringify('development'),
    WEBSITE_URL: JSON.stringify('https://dev.ownersearch.com.au'),
    API_SERVER: JSON.stringify('http://localhost:3000'),
    WP_API_SERVER: JSON.stringify('https://wordpress.ownersearch.com.au'),
    TYPE: JSON.stringify('browser'),
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true')),
}

module.exports = merge(config, {
  debug: true,
  devtool: 'eval-source-map',
  entry: {
    application: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'js/app/index.js',
    ],
    vendor: [
      'axios',
      'icepick',
      'react',
      'react-dom',
      'react-helmet',
      'react-popover',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-persist',
      'redux-form',
    ],  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../src/images'),
        to: 'images',
      }, {
        from: path.join(__dirname, '../src/static'),
        to: 'static',
      },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
    }),
  ],
  module: {
    loaders: [
      // Globals
      {
        test: /\.global\.(css|scss)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loaders: [
          'style',
          'css',
          'postcss',
          { loader: 'sass', query: { outputStyle: 'expanded' } },
        ],
      },
      // CSS Modules
      {
        test: /^((?!\.global).)*\.(css|scss)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loaders: [
          'style',
          {
            loader: 'css',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]-[hash:base64:5]',
            },
          },
          'postcss',
          {
            loader: 'sass',
            query: {
              outputStyle: 'expanded',
            },
          },
        ],
      },
    ],
  },
})
