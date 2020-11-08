const { merge } = require('webpack-merge');
const common = require('./webpack.common.js'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist', 
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.ejs`
    }),
  ],
})