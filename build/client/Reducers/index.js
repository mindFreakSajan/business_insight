'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _SearchBoxModule = require('../components/SearchBoxModule');

var _SearchBoxModule2 = _interopRequireDefault(_SearchBoxModule);

var _LoginPageModule = require('../containers/LoginPageModule');

var _LoginPageModule2 = _interopRequireDefault(_LoginPageModule);

var _FormPageModule = require('../containers/FormPageModule');

var _FormPageModule2 = _interopRequireDefault(_FormPageModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
    routing: _reactRouterRedux.routerReducer,
    search: _SearchBoxModule2.default,
    login: _LoginPageModule2.default,
    form: _FormPageModule2.default
});

exports.default = function (state, action) {
    return appReducer(state, action);
};
//# sourceMappingURL=index.js.map