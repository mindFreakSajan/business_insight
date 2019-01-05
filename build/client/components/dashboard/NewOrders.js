'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _colors = require('material-ui/styles/colors');

var _recharts = require('recharts');

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewOrders = function NewOrders(props) {

  var styles = {
    paper: {
      backgroundColor: _colors.purple500,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: _styles.typography.fontWeightLight,
      color: _colors.white,
      backgroundColor: _colors.purple600,
      padding: 10
    }
  };

  return _react2.default.createElement(
    _Paper2.default,
    { style: styles.paper },
    _react2.default.createElement(
      'div',
      { style: _extends({}, styles.header) },
      'New Orders'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.div },
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        null,
        _react2.default.createElement(
          _recharts.LineChart,
          { data: props.data },
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'pv', stroke: '#8884d8', strokeWidth: 2 })
        )
      )
    )
  );
};

NewOrders.propTypes = {
  data: _react.PropTypes.array
};

exports.default = NewOrders;
//# sourceMappingURL=NewOrders.js.map