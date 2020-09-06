const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.(css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'css/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: './basket-ball-spalding-3.png',
      prefix: '',
      cache: true,
      favicons: {
        path: '',
        appName: 'Three Ball Total Equilibrium Slot Machine',
        appShortName: 'Three Ball Slot Machine',
        developerName: 'ax710 and y-a-v-a',
        developerURL: 'http://www.infrath.in',
        appleStatusBarStyle: 'black',
        start_url: '/',
        icons: {
          appleStartup: false,
          yandex: false,
          coast: false
        }
      }
    }),
  ]
};
