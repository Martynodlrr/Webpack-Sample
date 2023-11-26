const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
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

  mode: 'development',
  devServer: {
    hot: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      //JavaScript
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
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
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      }
    ]
  }
};
