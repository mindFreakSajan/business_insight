'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxObservable = require('redux-observable');

var _LoginPageModule = require('../containers/LoginPageModule');

exports.default = (0, _reduxObservable.combineEpics)(_LoginPageModule.loginEpic);
//# sourceMappingURL=index.js.map