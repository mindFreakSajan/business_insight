'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _colors = require('material-ui/styles/colors');

var _styles = require('material-ui/styles');

var _wallpaper = require('material-ui/svg-icons/device/wallpaper');

var _wallpaper2 = _interopRequireDefault(_wallpaper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecentlyProducts = function RecentlyProducts(props) {

  var styles = {
    subheader: {
      fontSize: 24,
      fontWeight: _styles.typography.fontWeightLight,
      backgroundColor: _colors.cyan600,
      color: _colors.white
    }
  };

  var iconButtonElement = _react2.default.createElement(
    _IconButton2.default,
    {
      touch: true,
      tooltipPosition: 'bottom-left'
    },
    _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
  );

  var rightIconMenu = _react2.default.createElement(
    _IconMenu2.default,
    { iconButtonElement: iconButtonElement },
    _react2.default.createElement(
      _MenuItem2.default,
      null,
      'View'
    )
  );

  return _react2.default.createElement(
    _Paper2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(
        _Subheader2.default,
        { style: styles.subheader },
        'Recent Products'
      ),
      props.data.map(function (item) {
        return _react2.default.createElement(
          'div',
          { key: item.title },
          _react2.default.createElement(_List.ListItem, {
            leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_wallpaper2.default, null) }),
            primaryText: item.title,
            secondaryText: item.text,
            rightIconButton: rightIconMenu
          }),
          _react2.default.createElement(_Divider2.default, { inset: true })
        );
      })
    )
  );
};

RecentlyProducts.propTypes = {
  data: _react.PropTypes.array
};

exports.default = RecentlyProducts;
//# sourceMappingURL=RecentlyProducts.js.map