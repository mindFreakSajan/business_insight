import Path from 'path';
import ReactDOMServer from 'react-dom/server';
import { RouterContext,match,createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import Hapi from 'hapi';
import Inert from 'inert';
import WebpackPlugin from 'hapi-webpack-plugin';
import Routes from './client/routes';
import CreateStore from './client/Stores/store';
import loginapi from './server/Login/login';
// import api from './server/signup/signup';
// import additemapi from './server/additem/additem';

const renderPage = body => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, initial-scale=1.0, user-scalable=0">
  <title>Business Insight</title>
</head>
<body>
  <div id="app"><div>${body}</div></div>

  <!--  Roboto font -->
  <script>
    var WebFontConfig = {
      google: { families: [ 'Roboto:400,300,500:latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>
</body>
</html>`;


  const server = new Hapi.Server();
  server.connection({
    port: 3002
  });
  server.start(() => {
    console.log(`Server is running at ${server.info.uri}`);
  });

  server.register(Inert, (err) => {//to reply static resources like images
    if (err) {
      throw err;
    }
  });

  server.route({
    method: 'GET',
    path: '/{params*}',
    handler: (request, reply) => {
      reply.file(Path.join(__dirname, 'static', request.path));
    },
  });
  server.route(loginapi);
//   server.route(api);
//   server.route(additemapi);

    server.register({
      register: WebpackPlugin,
      options: './webpack.config.js',
    });

  server.ext('onRequest', (request, reply) => {console.log(request.path);
  reply.continue()});//goto on preresponse

  server.ext('onPreResponse', (request, reply) => {
    if (typeof request.response.statusCode !== 'undefined') {
      console.log("checkk1");
      return reply.continue();
    }
//server side rendering
    const memoryHistory = createMemoryHistory(request.path);
    const store = CreateStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store);
    

    match({ history, routes: Routes }, (err, redirect, props) => {
     
   console.log("checkk2");
      if (err) {
        console.log("err: "+err.message);
        // there was an error somewhere during route matching
        return reply(err.message).code(500);
      }
      if (redirect && redirect.pathname === '/404') {
        console.log("redirect: "+redirect+"  redirectpath: "+redirect.pathname);
        return reply('404.html').code(404);
      }
      if (redirect) {
        console.log("redirect: "+redirect+"  redirectpath: "+redirect.pathname);
        // route is entered, it can redirect. Here we handle on the server.
        return reply.redirect(redirect);
      }
      if (props) {
        console.log("props: "+JSON.stringify(props));
        // if we got props then we matched a route and can render. props are components return from matching
        const body = ReactDOMServer.renderToString(
          <Provider store={store}>
          <div>
            <RouterContext {...props} />
          </div>
          </Provider>);
          console.log("body: "+body)
        return reply(renderPage(body));
        //return reply();
      }
        // no errors, no redirect, we just didn't match anything
      return reply('Not Found').code(404);
    });
  });

