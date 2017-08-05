// Common Webpack configuration used by webpack.config.development and webpack.config.production
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HappyPack = require('happypack')
const values = require('postcss-modules-values');

const babelLoaderQuery = {
  presets: [
    'babel-preset-es2015',
    'babel-preset-react',
    'babel-preset-stage-0',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-lodash',
    'react-hot-loader/babel',
  ].map(require.resolve),
}

module.exports = {
  resolve: {
    symlinks: false,
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../src/js'),
      'node_modules',
    ],
    alias: {
      window: path.resolve(__dirname, '../src/js/app/window.js'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  plugins: [
    new HappyPack({
      threads: 4,
      loaders: [{
        path: 'babel',
        query: babelLoaderQuery,
      }],
    }),
  ],
  module: {
    loaders: [
      // JSON
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // JavaScript / ES6
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../src/js'),
        ],
        loader: 'happypack/loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]',
        },
      },

      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]',
        },
      },
    ],
  },
  postcss: () => [
    values,
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],
}
