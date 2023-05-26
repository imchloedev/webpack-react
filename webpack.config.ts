const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env: any) => {
  const isProd = env.production === true;

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }, // 확장자나 경로를 알아서 처리할 수 있도록 설정
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/', //가상경로
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          sideEffects: true,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        // 이미지 로더
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        // 폰트 로더
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
    devServer: {
      historyApiFallback: true,
      port: 8080,
      hot: true,
      publicPath: '/dist/',
    },
  };
};
