'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _styles = require('material-ui/styles');

var _colors = require('material-ui/styles/colors');

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactRouter = require('react-router');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import businessman from '../images/busiman.png';

var LeftDrawer = function LeftDrawer(props) {
  var navDrawerOpen = props.navDrawerOpen;


  var styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: _styles.typography.textFullWhite,
      lineHeight: _styles.spacing.desktopKeylineIncrement + 'px',
      fontWeight: _styles.typography.fontWeightLight,
      backgroundColor: _colors.blue600,
      paddingLeft: 40,
      height: 56
    },
    menuItem: {
      color: _colors.white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return _react2.default.createElement(
    _Drawer2.default,
    {
      docked: true,
      open: navDrawerOpen },
    _react2.default.createElement(
      'div',
      { style: styles.logo },
      'Business Insight'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.avatar.div },
      _react2.default.createElement(_Avatar2.default, { src: require('../images/busiman.png'),
        size: 50,
        style: styles.avatar.icon }),
      _react2.default.createElement(
        'span',
        { style: styles.avatar.span },
        props.username
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      props.menus.map(function (menu, index) {
        return _react2.default.createElement(_MenuItem2.default, {
          key: index,
          style: styles.menuItem,
          primaryText: menu.text,
          leftIcon: menu.icon,
          containerElement: _react2.default.createElement(_reactRouter.Link, { to: menu.link })
        });
      })
    )
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: _react.PropTypes.bool,
  menus: _react.PropTypes.array,
  username: _react.PropTypes.string
};

exports.default = LeftDrawer;
//# sourceMappingURL=LeftDrawer.js.map