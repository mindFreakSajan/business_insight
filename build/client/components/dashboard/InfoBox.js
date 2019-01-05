'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _colors = require('material-ui/styles/colors');

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoBox = function (_React$Component) {
  _inherits(InfoBox, _React$Component);

  function InfoBox() {
    _classCallCheck(this, InfoBox);

    return _possibleConstructorReturn(this, (InfoBox.__proto__ || Object.getPrototypeOf(InfoBox)).apply(this, arguments));
  }

  _createClass(InfoBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          title = _props.title,
          value = _props.value,
          Icon = _props.Icon;


      var styles = {
        content: {
          padding: '5px 10px',
          marginLeft: 90,
          height: 80
        },
        number: {
          display: 'block',
          fontWeight: _styles.typography.fontWeightMedium,
          fontSize: 18,
          color: _colors.grey800
        },
        text: {
          fontSize: 20,
          fontWeight: _styles.typography.fontWeightLight,
          color: _colors.grey800
        },
        iconSpan: {
          float: 'left',
          height: 90,
          width: 90,
          textAlign: 'center',
          backgroundColor: color
        },
        icon: {
          height: 48,
          width: 48,
          marginTop: 20,
          maxWidth: '100%'

        }
      };

      return _react2.default.createElement(
        _Paper2.default,
        null,
        _react2.default.createElement(
          'span',
          { style: styles.iconSpan },
          _react2.default.createElement(Icon, { color: _colors.white,
            style: styles.icon
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(
            'span',
            { style: styles.text },
            title
          ),
          _react2.default.createElement(
            'span',
            { style: styles.number },
            value
          )
        )
      );
    }
  }]);

  return InfoBox;
}(_react2.default.Component);

InfoBox.propTypes = {
  Icon: _react.PropTypes.any, // eslint-disable-line
  color: _react.PropTypes.string,
  title: _react.PropTypes.string,
  value: _react.PropTypes.string
};

exports.default = InfoBox;
//# sourceMappingURL=InfoBox.js.map