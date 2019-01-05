'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

require('./styles.scss');

require('font-awesome/css/font-awesome.css');

require('flexboxgrid/css/flexboxgrid.css');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _store = require('./Stores/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./favicon.ico'); /* eslint-disable import/default */

(0, _reactTapEventPlugin2.default)();
var store = (0, _store2.default)(_reactRouter.browserHistory);

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
    )
), document.getElementById('app'));
//# sourceMappingURL=index.js.map