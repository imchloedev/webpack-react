const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const prod = process.env.REACT_APP_NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

if (prod) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: 'common.css',
    })
  );
}

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }, // 확장자나 경로를 알아서 처리할 수 있도록 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};
