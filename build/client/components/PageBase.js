'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBase = function PageBase(props) {
  var title = props.title,
      navigation = props.navigation;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { style: _styles2.default.navigation },
      navigation
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: _styles2.default.paper },
      _react2.default.createElement(
        'h3',
        { style: _styles2.default.title },
        title
      ),
      _react2.default.createElement(_Divider2.default, null),
      props.children,
      _react2.default.createElement('div', { style: _styles2.default.clear })
    )
  );
};

PageBase.propTypes = {
  title: _react.PropTypes.string,
  navigation: _react.PropTypes.string,
  children: _react.PropTypes.element
};

exports.default = PageBase;
//# sourceMappingURL=PageBase.js.map