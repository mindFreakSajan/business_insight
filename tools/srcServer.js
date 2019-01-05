import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
// import React from 'react';
// import Hapi from 'hapi';
// import WebpackPlugin from 'hapi-webpack-plugin';
import loginapi from './Login/login';

const bundler = webpack(config);

browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,

        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },
      }),
      {...loginapi},
      webpackHotMiddleware(bundler)
    ]
  },

  files: [
    'src/*.html'
  ]
});
// const server = new Hapi.Server();
// server.connection({
//   port: 3000
// });
// server.start(() => {
//   console.log(`Server is running at ${server.info.uri}`);
// });
//   server.register({
//     register: WebpackPlugin,
//     options: './webpack.config.dev.js',
//   });
//   server.route(loginapi);

