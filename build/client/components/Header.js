'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _viewModule = require('material-ui/svg-icons/action/view-module');

var _viewModule2 = _interopRequireDefault(_viewModule);

var _colors = require('material-ui/styles/colors');

var _SearchBox = require('./SearchBox');

var _SearchBox2 = _interopRequireDefault(_SearchBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          styles = _props.styles,
          handleChangeRequestNavDrawer = _props.handleChangeRequestNavDrawer;


      var style = {
        appBar: {
          position: 'fixed',
          top: 0,
          overflow: 'hidden',
          maxHeight: 57
        },
        menuButton: {
          marginLeft: 10
        },
        iconsRightContainer: {
          marginLeft: 20
        }
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, {
          style: _extends({}, styles, style.appBar),
          title: _react2.default.createElement(_SearchBox2.default, null),
          iconElementLeft: _react2.default.createElement(
            _IconButton2.default,
            { style: style.menuButton, onClick: handleChangeRequestNavDrawer },
            _react2.default.createElement(_menu2.default, { color: _colors.white })
          ),
          iconElementRight: _react2.default.createElement(
            'div',
            { style: style.iconsRightContainer },
            _react2.default.createElement(
              _IconMenu2.default,
              { color: _colors.white,
                iconButtonElement: _react2.default.createElement(
                  _IconButton2.default,
                  null,
                  _react2.default.createElement(_viewModule2.default, { color: _colors.white })
                ),
                targetOrigin: { horizontal: 'right', vertical: 'top' },
                anchorOrigin: { horizontal: 'right', vertical: 'top' }
              },
              _react2.default.createElement(_MenuItem2.default, { key: 1, primaryText: 'Application 1' }),
              _react2.default.createElement(_MenuItem2.default, { key: 2, primaryText: 'Application 2' }),
              _react2.default.createElement(_MenuItem2.default, { key: 3, primaryText: 'Application 3' })
            ),
            _react2.default.createElement(
              _IconMenu2.default,
              { color: _colors.white,
                iconButtonElement: _react2.default.createElement(
                  _IconButton2.default,
                  null,
                  _react2.default.createElement(_moreVert2.default, { color: _colors.white })
                ),
                targetOrigin: { horizontal: 'right', vertical: 'top' },
                anchorOrigin: { horizontal: 'right', vertical: 'top' }
              },
              _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out', containerElement: _react2.default.createElement(_reactRouter.Link, { to: '/login' }) })
            )
          )
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  styles: _react.PropTypes.object,
  handleChangeRequestNavDrawer: _react.PropTypes.func
};

exports.default = Header;
//# sourceMappingURL=Header.js.map