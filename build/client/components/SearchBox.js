'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = require('material-ui/styles/colors');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _SearchBoxModule = require('./SearchBoxModule');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox(props) {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));

    _this.onChangeHandler = function (e) {
      _this.props.setSearchText(e.target.value);
    };

    _this.styles = {
      iconButton: {
        float: 'left',
        paddingTop: 17
      },
      textField: {
        color: _colors.white,
        backgroundColor: _colors.blue500,
        borderRadius: 2,
        height: 35
      },
      inputStyle: {
        color: _colors.white,
        paddingLeft: 5
      },
      hintStyle: {
        height: 16,
        paddingLeft: 5,
        color: _colors.white
      }
    };
    return _this;
  }

  _createClass(SearchBox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { style: this.styles.iconButton },
          _react2.default.createElement(_search2.default, { color: _colors.white })
        ),
        _react2.default.createElement(_TextField2.default, {
          underlineShow: false,
          fullWidth: true,
          style: this.styles.textField,
          inputStyle: this.styles.inputStyle,
          hintStyle: this.styles.hintStyle,
          value: this.props.searchtext,
          onChange: this.onChangeHandler
        })
      );
    }
  }]);

  return SearchBox;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchtext: state.search.searchtext
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setSearchText: _SearchBoxModule.setSearchText,
    search: _SearchBoxModule.search
  }, dispatch);
};
SearchBox.propTypes = {
  searchtext: _propTypes2.default.string.isRequired,
  setSearchText: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.func.isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBox);
//# sourceMappingURL=SearchBox.js.map