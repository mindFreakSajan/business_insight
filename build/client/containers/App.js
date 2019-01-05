'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _LeftDrawer = require('../components/LeftDrawer');

var _LeftDrawer2 = _interopRequireDefault(_LeftDrawer);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _themeDefault = require('../theme-default');

var _themeDefault2 = _interopRequireDefault(_themeDefault);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      navDrawerOpen: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.width !== nextProps.width) {
        this.setState({ navDrawerOpen: nextProps.width === _withWidth.LARGE });
      }
    }
  }, {
    key: 'handleChangeRequestNavDrawer',
    value: function handleChangeRequestNavDrawer() {
      this.setState({
        navDrawerOpen: !this.state.navDrawerOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var navDrawerOpen = this.state.navDrawerOpen;

      var paddingLeftDrawerOpen = 236;

      var styles = {
        header: {
          paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
        },
        container: {
          margin: '80px 20px 20px 15px',
          paddingLeft: navDrawerOpen && this.props.width !== _withWidth.SMALL ? paddingLeftDrawerOpen : 0
        }
      };

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: _themeDefault2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, { styles: styles.header,
            handleChangeRequestNavDrawer: this.handleChangeRequestNavDrawer.bind(this) }),
          _react2.default.createElement(_LeftDrawer2.default, { navDrawerOpen: navDrawerOpen,
            menus: _data2.default.menus,
            username: 'User Admin' }),
          _react2.default.createElement(
            'div',
            { style: styles.container },
            this.props.children
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  children: _react.PropTypes.element,
  width: _react.PropTypes.number
};

exports.default = (0, _withWidth2.default)()(App);
//# sourceMappingURL=App.js.map