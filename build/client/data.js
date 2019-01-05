'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assessment = require('material-ui/svg-icons/action/assessment');

var _assessment2 = _interopRequireDefault(_assessment);

var _gridOn = require('material-ui/svg-icons/image/grid-on');

var _gridOn2 = _interopRequireDefault(_gridOn);

var _permIdentity = require('material-ui/svg-icons/action/perm-identity');

var _permIdentity2 = _interopRequireDefault(_permIdentity);

var _web = require('material-ui/svg-icons/av/web');

var _web2 = _interopRequireDefault(_web);

var _colors = require('material-ui/styles/colors');

var _expandLess = require('material-ui/svg-icons/navigation/expand-less');

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  menus: [{ text: 'DashBoard', icon: _react2.default.createElement(_assessment2.default, null), link: '/dashboard' }, { text: 'Add Product', icon: _react2.default.createElement(_web2.default, null), link: '/form' }, { text: 'View Products', icon: _react2.default.createElement(_gridOn2.default, null), link: '/table' }, { text: 'Sign out', icon: _react2.default.createElement(_permIdentity2.default, null), link: '/login' }],
  tablePage: {
    items: [{ id: 1, name: 'iPhone', price: '75000', category: 'Mobiles' }, { id: 2, name: 'Samsung TV', price: '45000', category: 'TV' }, { id: 3, name: 'Heater', price: '2500', category: 'Winter Elx' }, { id: 4, name: 'Solar', price: '30000', category: 'Panels' }, { id: 5, name: 'Dell Laptop', price: '60000', category: 'Computers' }, { id: 6, name: 'UPS', price: '10000', category: 'Computers' }, { id: 7, name: 'Mobile Charger', price: '500', category: 'Mobiles' }, { id: 8, name: 'Room AC', price: '60000', category: 'Conditioners' }]
  },
  dashBoardPage: {
    recentProducts: [{ id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.' }, { id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System' }, { id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G ' }, { id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop' }],
    monthlySales: [{ name: 'Jan', uv: 3700 }, { name: 'Feb', uv: 3000 }, { name: 'Mar', uv: 2000 }, { name: 'Apr', uv: 2780 }, { name: 'May', uv: 2000 }, { name: 'Jun', uv: 1800 }, { name: 'Jul', uv: 2600 }, { name: 'Aug', uv: 2900 }, { name: 'Sep', uv: 3500 }, { name: 'Oct', uv: 3000 }, { name: 'Nov', uv: 2400 }, { name: 'Dec', uv: 2780 }],
    newOrders: [{ pv: 2400 }, { pv: 1398 }, { pv: 9800 }, { pv: 3908 }, { pv: 4800 }, { pv: 3490 }, { pv: 4300 }],
    browserUsage: [{ name: 'iPhone', value: 800, color: _colors.cyan600, icon: _react2.default.createElement(_expandMore2.default, null) }, { name: 'Heater', value: 300, color: _colors.pink600, icon: _react2.default.createElement(_chevronRight2.default, null) }, { name: 'CG TV', value: 300, color: _colors.purple600, icon: _react2.default.createElement(_expandLess2.default, null) }]
  }
};

exports.default = data;
//# sourceMappingURL=data.js.map