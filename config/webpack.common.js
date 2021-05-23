/** @type {import('webpack').Configuration} */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: ['./src/scripts/animaciones.js', './src/scripts/app.js', './src/scripts/header.js', './src/scripts/menu.js'],

output: {
  path: path.resolve(__dirname, "../build"),
  filename: "[name].js",
},

  module: {
    rules: [
        {
          use: ['style-loader','css-loader','sass-loader'],
          test: /\.s[ac]ss$/i,
        },

    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html'})
  ]
}