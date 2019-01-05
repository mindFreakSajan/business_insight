'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _recharts = require('recharts');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserUsage = function BrowserUsage(props) {

  var styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    legend: {
      paddingTop: 20
    },
    pieChartDiv: {
      height: 290,
      textAlign: 'center'
    }
  };

  return _react2.default.createElement(
    _Paper2.default,
    { style: styles.paper },
    _react2.default.createElement(
      'span',
      { style: _styles2.default.title },
      'Trending Products'
    ),
    _react2.default.createElement('div', { style: _styles2.default.clear }),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-8 col-md-8 col-lg-8' },
        _react2.default.createElement(
          'div',
          { style: styles.pieChartDiv },
          _react2.default.createElement(
            _recharts.ResponsiveContainer,
            null,
            _react2.default.createElement(
              _recharts.PieChart,
              null,
              _react2.default.createElement(
                _recharts.Pie,
                {
                  innerRadius: 80,
                  outerRadius: 130,
                  data: props.data,
                  fill: '#8884d8' },
                props.data.map(function (item) {
                  return _react2.default.createElement(_recharts.Cell, { key: item.name, fill: item.color });
                })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4' },
        _react2.default.createElement(
          'div',
          { style: styles.legend },
          _react2.default.createElement(
            'div',
            { style: styles.legend },
            _react2.default.createElement(
              _List2.default,
              null,
              props.data.map(function (item) {
                return _react2.default.createElement(
                  _ListItem2.default,
                  {
                    key: item.name,
                    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: item.icon,
                      backgroundColor: item.color }) },
                  item.name
                );
              })
            )
          )
        )
      )
    )
  );
};

BrowserUsage.propTypes = {
  data: _react.PropTypes.array
};

exports.default = BrowserUsage;
//# sourceMappingURL=BrowserUsage.js.map