// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

// module.exports = {
//     entry: {
//         main: ['@babel/polyfill', './docs/index.js']
//       },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     optimization: {
//         minimize: true,
//         minimizer: [new TerserPlugin()],
//     },
//     devServer: {
//         hot: true,
//         contentBase: './docs'

//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(png|jpg|svg|gif)$/,
//                 use: ['file-loader']
//             },
//             {
//                 test: /\.js$/,
//                 include: path.resolve(__dirname, 'docs'),
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                     }
//                 }
//             }
//         ]
//     },
//     plugins: [
//                 new HtmlWebpackPlugin({
//                     template: "./docs/index.html"
//                 }),
//                 new CleanWebpackPlugin(),
//                 new CopyWebpackPlugin({
//                     patterns: [
//                         {
//                             from: path.resolve(__dirname, 'docs'),
//                             to: path.resolve(__dirname, 'dist')
//                         }
//                     ],
//                 }),
                
//             ]
// };

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "public" },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new ReactRefreshWebpackPlugin()
  ],
  entry: ['react-hot-loader/patch', './docs/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./docs",
    open: true,
    clientLogLevel: 'silent',
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        }
      },
      {
          test: /\.(png|jpg|svg|gif)$/,
          loader: 'file-loader',
          options: {
            publicPath: './public'
          }
      },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'docs'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}