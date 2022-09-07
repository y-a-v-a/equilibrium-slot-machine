const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = false;

module.exports = {
  output: {
    path: '/Users/nlbruiv/Projects/equilibrium-slot-machine/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
    // new FaviconsWebpackPlugin({
    //   logo: './basket-ball-spalding-3.png',
    //   prefix: '',
    //   cache: true,
    //   favicons: {
    //     path: '',
    //     appName: 'Three Ball Total Equilibrium Slot Machine',
    //     appShortName: 'Three Ball Slot Machine',
    //     developerName: 'ax710 and y-a-v-a',
    //     developerURL: 'http://www.infrath.in',
    //     appleStatusBarStyle: 'black',
    //     start_url: '/',
    //     icons: {
    //       appleStartup: false,
    //       yandex: false,
    //       coast: false
    //     }
    //   }
    // }),
  ],
};
