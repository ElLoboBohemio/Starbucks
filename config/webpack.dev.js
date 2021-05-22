/** @type {import('webpack').Configuration} */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "./build",
    open: "brave",
  },
}

module.exports = merge(common, devConfig);