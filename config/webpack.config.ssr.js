const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  GLOBAL_ENV: {
    NODE_ENV: JSON.stringify('production'),
    WEBSITE_URL: JSON.stringify('https://zuper.com.au'),
    API_SERVER: JSON.stringify('https://zuperapistage.azurewebsites.net'),
    WP_API_SERVER: JSON.stringify('wordpress.zuper.com.au'),
    TYPE: JSON.stringify('server'),
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
}

module.exports = merge(config, {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: {
    ssr: 'js/app/ssr.js',
  },
  output: {
    library: 'library',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({
      filename: 'css/app.[chunkhash].css',
      allChunks: true,
    }),
  ],
  target: 'node',
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
                localIdentName: '[name]_[local]-[hash:base64:5]',
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
