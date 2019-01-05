'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _LoginPage = require('./containers/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _FormPage = require('./containers/FormPage');

var _FormPage2 = _interopRequireDefault(_FormPage);

var _TablePage = require('./containers/TablePage');

var _TablePage2 = _interopRequireDefault(_TablePage);

var _DashboardPage = require('./containers/DashboardPage');

var _DashboardPage2 = _interopRequireDefault(_DashboardPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import NotFoundPage from './containers/NotFoundPage.js';
exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LoginPage2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _DashboardPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: _DashboardPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'form', component: _FormPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'table', component: _TablePage2.default })
  )
);
//# sourceMappingURL=routes.js.map