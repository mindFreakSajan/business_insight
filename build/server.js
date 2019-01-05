'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _hapiWebpackPlugin = require('hapi-webpack-plugin');

var _hapiWebpackPlugin2 = _interopRequireDefault(_hapiWebpackPlugin);

var _routes = require('./client/routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./client/Stores/store');

var _store2 = _interopRequireDefault(_store);

var _login = require('./server/Login/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPage = function renderPage(body) {
  return '<!DOCTYPE html>\n                    <html lang="en-us">\n                    <head>\n                    <title>Business Insight</title>\n                    <link rel="stylesheet" href="css/style.css">\n                    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                    <meta charset="utf-8"/>\n                    <meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, initial-scale=1.0, user-scalable=0">\n                  </head>\n                        <body>\n                        <div id="app"class="container"><div>' + body + '</div></div>\n                        <div id="portal"></div>\n                        <script type="text/javascript"  src="/bundle.js"></script>\n                        <script>\n                        var WebFontConfig = {\n                          google: { families: [ \'Roboto:400,300,500:latin\' ] }\n                        };\n                        (function() {\n                          var wf = document.createElement(\'script\');\n                          wf.src = \'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';\n                          wf.type = \'text/javascript\';\n                          wf.async = \'true\';\n                          var s = document.getElementsByTagName(\'script\')[0];\n                          s.parentNode.insertBefore(wf, s);\n                        })();\n                      </script>\n                        </body>\n                    </html>';
};

var server = new _hapi2.default.Server();
server.connection({
  port: 3002
});
server.start(function () {
  console.log('Server is running at ' + server.info.uri);
});

server.register(_inert2.default, function (err) {
  //to reply static resources like images
  if (err) {
    throw err;
  }
});

server.route({
  method: 'GET',
  path: '/{params*}',
  handler: function handler(request, reply) {
    reply.file(_path2.default.join(__dirname, 'static', request.path));
  }
});
server.route(_login2.default);

server.register({
  register: _hapiWebpackPlugin2.default,
  options: './webpack.config.js'
});

server.ext('onRequest', function (request, reply) {
  console.log(request.path);
  reply.continue();
}); //goto on preresponse

server.ext('onPreResponse', function (request, reply) {
  if (typeof request.response.statusCode !== 'undefined') {
    console.log("checkk1");
    return reply.continue();
  }
  //server side rendering
  var memoryHistory = (0, _reactRouter.createMemoryHistory)(request.path);
  var store = (0, _store2.default)(memoryHistory);
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

  console.log("routes: " + JSON.stringify(_routes2.default));

  (0, _reactRouter.match)({ history: history, routes: _routes2.default }, function (err, redirect, props) {
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
      console.log("props: " + JSON.stringify(props));
      // if we got props then we matched a route and can render. props are components return from matching
      var body = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouter.RouterContext, props)
        )
      ));
      console.log("body: " + body);
      return reply(renderPage(body));
    }
    // no errors, no redirect, we just didn't match anything
    return reply('Not Found').code(404);
  });
});
//# sourceMappingURL=server.js.map