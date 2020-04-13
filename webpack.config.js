'use strict';

const { resolve } = require('path');

module.exports = {
  entry: './browser/main.js', // Points to the main.js in the browser project folder
  mode: 'development',
  output: {
    path: __dirname, // points to bundle.js in the public folder
    filename: './public/bundle.js',
  },
  resolve: {}, // <----- JPFP has extensions key in resolve set to ['.js', '.jsx']. Will probably revisit as you continue set-up.
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
