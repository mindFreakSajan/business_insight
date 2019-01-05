'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxObservable = require('redux-observable');

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

var _reactRouterRedux = require('react-router-redux');

var _Reducers = require('../Reducers');

var _Reducers2 = _interopRequireDefault(_Reducers);

var _Epics = require('../Epics');

var _Epics2 = _interopRequireDefault(_Epics);

require('rxjs/add/operator/switchMap');

require('rxjs/add/operator/map');

require('rxjs/add/observable/of');

require('rxjs/add/operator/catch');

require('rxjs/observable/dom/ajax');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//chrome extension
var epicMiddleware = (0, _reduxObservable.createEpicMiddleware)(_Epics2.default);

var configureStore = function configureStore(browserHistory, data) {
  var finalCreateStore = (0, _developmentOnly.composeWithDevTools)((0, _redux.applyMiddleware)(epicMiddleware, (0, _reactRouterRedux.routerMiddleware)(browserHistory)))(_redux.createStore);
  var store = finalCreateStore(_Reducers2.default, data);
  return store;
};

exports.default = configureStore;
//# sourceMappingURL=store.js.map