const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(`${__dirname}/static`);
const APP_DIR = path.resolve(`${__dirname}/src/client`);

module.exports = {
  entry: {
    app: [
      `${APP_DIR}/index.js`,
      'webpack-hot-middleware/client',
    ],
    //vendors: ['react'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      SERVER: false,
    }),
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify('development'),
    //     __DEV__: true,
    //   }),
    //   new webpack.HotModuleReplacementPlugin(),
    //   new HtmlWebpackPlugin({
    //     template: 'src/client/index.ejs',
    //     minify: {
    //       removeComments: true,
    //       collapseWhitespace: true
    //     },
    //     inject: true
    //   }),
    // new webpack.NoEmitOnErrorsPlugin(),
    // new ExtractTextPlugin('styles.css'),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css','.jsx'],
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?fonts/name=[name].[ext]',
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        exclude: /node_modules/,
        loader: 'file-loader?images/name=[name].[ext]',
      },
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }),
    },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    },
    {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
    ],
  },
};
