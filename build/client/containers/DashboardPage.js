'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('material-ui/styles/colors');

var _assessment = require('material-ui/svg-icons/action/assessment');

var _assessment2 = _interopRequireDefault(_assessment);

var _face = require('material-ui/svg-icons/action/face');

var _face2 = _interopRequireDefault(_face);

var _thumbUp = require('material-ui/svg-icons/action/thumb-up');

var _thumbUp2 = _interopRequireDefault(_thumbUp);

var _shoppingCart = require('material-ui/svg-icons/action/shopping-cart');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _InfoBox = require('../components/dashboard/InfoBox');

var _InfoBox2 = _interopRequireDefault(_InfoBox);

var _NewOrders = require('../components/dashboard/NewOrders');

var _NewOrders2 = _interopRequireDefault(_NewOrders);

var _MonthlySales = require('../components/dashboard/MonthlySales');

var _MonthlySales2 = _interopRequireDefault(_MonthlySales);

var _BrowserUsage = require('../components/dashboard/BrowserUsage');

var _BrowserUsage2 = _interopRequireDefault(_BrowserUsage);

var _RecentlyProducts = require('../components/dashboard/RecentlyProducts');

var _RecentlyProducts2 = _interopRequireDefault(_RecentlyProducts);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPage = function DashboardPage() {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { style: _styles2.default.navigation },
      'Application / Dashboard'
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ' },
        _react2.default.createElement(_InfoBox2.default, { Icon: _shoppingCart2.default,
          color: _colors.pink600,
          title: 'Total Profit',
          value: '1500k'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ' },
        _react2.default.createElement(_InfoBox2.default, { Icon: _thumbUp2.default,
          color: _colors.cyan600,
          title: 'Likes',
          value: '4231'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ' },
        _react2.default.createElement(_InfoBox2.default, { Icon: _assessment2.default,
          color: _colors.purple600,
          title: 'Sales',
          value: '460'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ' },
        _react2.default.createElement(_InfoBox2.default, { Icon: _face2.default,
          color: _colors.orange600,
          title: 'New Customers',
          value: '248'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15' },
        _react2.default.createElement(_NewOrders2.default, { data: _data2.default.dashBoardPage.newOrders })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15' },
        _react2.default.createElement(_MonthlySales2.default, { data: _data2.default.dashBoardPage.monthlySales })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ' },
        _react2.default.createElement(_RecentlyProducts2.default, { data: _data2.default.dashBoardPage.recentProducts })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ' },
        _react2.default.createElement(_BrowserUsage2.default, { data: _data2.default.dashBoardPage.browserUsage })
      )
    )
  );
};

exports.default = DashboardPage;
//# sourceMappingURL=DashboardPage.js.map