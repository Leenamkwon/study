const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('webpack')

module.exports = {
  entry: {
    // app: './src/index.js',
    prototype: './src/3_week/event/index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/3_week/event/index.html',
      filename: './index.html',
      showErrors: true, // dev-server error 발생시 브라우저에 에러 노출 여부
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    open: true,
  },
}
