const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
  GLOBAL_ENV: {
    NODE_ENV: JSON.stringify('production'),
    WEBSITE_URL: JSON.stringify('https://dev.ownersearch.com.au'),
    API_SERVER: JSON.stringify('https://api.ownerseach.com.au'),
    WP_API_SERVER: JSON.stringify('https://wordpress.ownersearch.com.au'),
    TYPE: JSON.stringify('browser'),
    TYPE: JSON.stringify('browser'),
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
}

const chunkIncludes = (targets) => ({ context }) => {
  return context && context.indexOf('node_modules') >= 0 && targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context))
}

module.exports = merge(config, {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: {
    application: ['babel-polyfill', 'js/app/index.js'],
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
    ],
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  plugins: [
    // Avoid publishing files when compilation fails
//    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/app.[chunkhash].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../src/images'),
        to: 'images',
      }, {
        from: path.join(__dirname, '../src/static'),
        to: 'static',
      },
    ]),

    // Long term caching - https://webpack.js.org/guides/caching/#deterministic-hashes
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new WebpackChunkHash(),
    new webpack.HashedModuleIdsPlugin(),
  ],
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      // Globals
      {
        test: /\.global\.(css|scss)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            { loader: 'css', query: { sourceMap: true } },
            'postcss',
            { loader: 'sass', query: { outputStyle: 'compressed' } },
          ],
        }),
      },
      // CSS Modules
      {
        test: /^((?!\.global).)*\.(css|scss)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            {
              loader: 'css',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[emoji:4]',
              },
            },
            'postcss',
            {
              loader: 'sass',
              query: {
                outputStyle: 'compressed',
              },
            },
          ],
        }),
      },
    ],
  },
})
