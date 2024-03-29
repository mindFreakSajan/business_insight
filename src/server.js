import Path from 'path';
import { renderToString } from 'react-dom/server';
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


const renderPage = body => `<!DOCTYPE html>
                    <html lang="en-us">
                    <head>
                    <title>Business Insight</title>
                    <link rel="stylesheet" href="css/style.css">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, initial-scale=1.0, user-scalable=0">
                  </head>
                        <body>
                        <div id="app"class="container"><div>${body}</div></div>
                        <div id="portal"></div>
                        <script type="text/javascript"  src="/bundle.js"></script>
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

    server.register({
      register: WebpackPlugin,
      options: './webpack.config.js',
    });

  server.ext('onRequest', (request, reply) =>{
    console.log(request.path);
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
    
   console.log("routes: "+JSON.stringify(Routes));

    match({ history, routes: Routes }, (err, redirect, props) => {
      console.log("checkk2");
      if (err) {
        // there was an error somewhere during route matching
        return reply(err.message).code(500);
      }
      if (redirect && redirect.pathname === '/404') {
        return reply('404.html').code(404);
      }
      if (redirect) {
        // route is entered, it can redirect. Here we handle on the server.
        return reply.redirect(redirect);
      }
      if (props) {
        console.log("props: "+JSON.stringify(props));
        // if we got props then we matched a route and can render. props are components return from matching
        const body = renderToString(
          <Provider store={store}>
          <div>
            <RouterContext {...props} />
          </div>
          </Provider>);
          console.log("body: "+body);
        return reply(renderPage(body));
      }
        // no errors, no redirect, we just didn't match anything
      return reply('Not Found').code(404);
    });
  });

