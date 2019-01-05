'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeDefault = (0, _getMuiTheme2.default)({
  palette: {},
  appBar: {
    height: 57,
    color: _colors.blue600
  },
  drawer: {
    width: 230,
    color: _colors.grey900
  },
  raisedButton: {
    primaryColor: _colors.blue600
  }
});

exports.default = themeDefault;
//# sourceMappingURL=theme-default.js.map