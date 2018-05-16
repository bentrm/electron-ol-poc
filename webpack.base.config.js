const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin(["static"]),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        compress: true
      }
    })
  ]
};

module.exports = config;
