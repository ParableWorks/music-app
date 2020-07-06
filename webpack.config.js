const path = require('path');
const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      title: 'autohome',
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    // make sure this ip address is right otherwise npm start throws EADDRNOTAVAIL
    // setting it to 0.0.0.0 uses the current ip address
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  node: {
    fs: 'empty',
  },
});
