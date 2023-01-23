const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Demo App',
      header: 'Webpack Again Title',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })    
  ],
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  devtool: 'source-map'
}