const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env: any) => {
  const isProd = env.production === true;

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, 'components'),
        '@src': path.resolve(__dirname, 'src'),
      },
    }, // 확장자나 경로를 알아서 처리할 수 있도록 설정
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[chunkhash].js',
      publicPath: '/',
    }, // chunk hash 파일이 달라질 때에만 랜덤 값이 바뀐다.
    // 변경되지 않은 파일들은 계속 캐싱하고 변경된 파일만 새로 불러올 수 있다.
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: ['/node_modules'],
        },
        {
          test: /\.css$/i,
          sideEffects: true,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            { loader: 'css-loader', options: { outputPath: 'css' } },
          ],
        },
        // 이미지 로더
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 8192,
        //         options: {
        //           publicPath: 'images/',
        //         },
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'media/',
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
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
    ],
    devServer: {
      historyApiFallback: true,
      port: 8080,
      hot: true,
    },
  };
};
