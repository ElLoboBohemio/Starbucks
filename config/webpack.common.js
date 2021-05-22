/** @type {import('webpack').Configuration} */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: ['./src/scripts/animaciones.js', './src/scripts/app.js', './src/scripts/header.js', './src/scripts/menu.js'],

output: {
  path: path.resolve(__dirname, "../build"),
  filename: "bundle.js",
  publicPath: "/build/",
},

  module: {
    rules: [
        {
          use: ['style-loader','css-loader','sass-loader'],
          test: /\.s[ac]ss$/i,
        },

        {
          test: /\.(webp|svg|ico)$/i,
          loader: 'file-loader',
          options: 
            {
              name: '[name].[hash:6].[ext]',
              outputPath: 'images',
              publicPath: 'images',
              emitFile: true,
              esModule: false,
            }
        },

        {
          test: /\.html$/i,
          use: [
            "html-loader" 
          ]
        },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html"
    })
  ]
}