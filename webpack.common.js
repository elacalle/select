const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [{
          resourceQuery: /^\?vue/,
          use: ["pug-plain-loader"]
        }, {
          use: [
            "html-loader",
            "pug-plain-loader"
          ]
        }]
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}