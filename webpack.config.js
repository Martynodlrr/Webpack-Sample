const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  mode: 'development',

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      //JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      //Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        include: path.resolve(__dirname, './src/images'),
        type: 'asset/resource',
      },
      //Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader', 'sass-loader'],
      },
    ]
  }
};
