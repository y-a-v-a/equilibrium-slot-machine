const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackFavicons = require('webpack-favicons');

const devMode = false;

module.exports = {
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**', 'main.*.css'],
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new WebpackFavicons({
      src: './basket-ball-spalding-3.png',
      path: '',
      appName: 'Three Ball Total Equilibrium Slot Machine',
      appShortName: 'Three Ball Slot Machine',
      developerURL: 'http://www.infrath.in',
      appleStatusBarStyle: 'black',
      start_url: '/',
      icons: {
        yandex: false,
        coast: false,
        appleStartup: false,
        appleIcon: true,
        android: true,
      },
    }),
  ],
};
