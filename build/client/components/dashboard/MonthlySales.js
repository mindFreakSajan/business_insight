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

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthlySales = function MonthlySales(props) {

  var styles = {
    paper: {
      backgroundColor: _colors.pink600,
      height: 150
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: _colors.white,
      backgroundColor: _colors.pink500,
      padding: 10
    }
  };

  return _react2.default.createElement(
    _Paper2.default,
    { style: styles.paper },
    _react2.default.createElement(
      'div',
      { style: _extends({}, _styles2.default.title, styles.header) },
      'Monthly Sales'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.div },
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        null,
        _react2.default.createElement(
          _recharts.BarChart,
          { data: props.data },
          _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', fill: _colors.pink500 }),
          _react2.default.createElement(_recharts.XAxis, { dataKey: 'name', stroke: 'none', tick: { fill: _colors.white } })
        )
      )
    )
  );
};

MonthlySales.propTypes = {
  data: _react.PropTypes.array
};

exports.default = MonthlySales;
//# sourceMappingURL=MonthlySales.js.map