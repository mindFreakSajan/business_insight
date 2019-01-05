'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _colors = require('material-ui/styles/colors');

var _personAdd = require('material-ui/svg-icons/social/person-add');

var _personAdd2 = _interopRequireDefault(_personAdd);

var _help = require('material-ui/svg-icons/action/help');

var _help2 = _interopRequireDefault(_help);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = require('react-router');

var _themeDefault = require('../theme-default');

var _themeDefault2 = _interopRequireDefault(_themeDefault);

var _LoginPageModule = require('./LoginPageModule');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.onChangeHandler1 = function (e) {
      _this.props.setEmailText(e.target.value);
    };

    _this.onChangeHandler2 = function (e) {
      _this.props.setPasswordText(e.target.value);
    };

    _this.onButtonPress = function () {
      var email = _this.props.email;
      var password = _this.props.password;
      console.log("hello");
      _this.props.login({
        email: email,
        password: password
      });
    };

    _this.styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: _colors.grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: _colors.grey500
        },
        iconStyle: {
          color: _colors.grey500,
          borderColor: _colors.grey500,
          fill: _colors.grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: _colors.white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnFacebook: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      }
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: _themeDefault2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: this.styles.loginContainer },
            _react2.default.createElement(
              _Paper2.default,
              { style: this.styles.paper },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(_TextField2.default, {
                  hintText: 'E-mail',
                  floatingLabelText: 'E-mail',
                  fullWidth: true,
                  value: this.props.email,
                  onChange: this.onChangeHandler1
                }),
                _react2.default.createElement(_TextField2.default, {
                  hintText: 'Password',
                  floatingLabelText: 'Password',
                  fullWidth: true,
                  type: 'password',
                  value: this.props.password,
                  onChange: this.onChangeHandler2
                }),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Checkbox2.default, {
                    label: 'Remember me',
                    style: this.styles.checkRemember.style,
                    labelStyle: this.styles.checkRemember.labelStyle,
                    iconStyle: this.styles.checkRemember.iconStyle
                  }),
                  _react2.default.createElement(_RaisedButton2.default, { label: 'Login',
                    primary: true,
                    style: this.styles.loginBtn,
                    onClick: this.onButtonPress
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { style: this.styles.buttonsDiv },
              _react2.default.createElement(_FlatButton2.default, {
                label: 'Register',
                href: '/',
                style: this.styles.flatButton,
                icon: _react2.default.createElement(_personAdd2.default, null)
              }),
              _react2.default.createElement(_FlatButton2.default, {
                label: 'Forgot Password?',
                href: '/',
                style: this.styles.flatButton,
                icon: _react2.default.createElement(_help2.default, null)
              })
            ),
            _react2.default.createElement(
              'div',
              { style: this.styles.buttonsDiv },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/', style: _extends({}, this.styles.btn, this.styles.btnFacebook) },
                _react2.default.createElement('i', { className: 'fa fa-facebook fa-lg' }),
                _react2.default.createElement(
                  'span',
                  { style: this.styles.btnSpan },
                  'Log in with Facebook'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/', style: _extends({}, this.styles.btn, this.styles.btnGoogle) },
                _react2.default.createElement('i', { className: 'fa fa-google-plus fa-lg' }),
                _react2.default.createElement(
                  'span',
                  { style: this.styles.btnSpan },
                  'Log in with Google'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    email: state.login.email,
    password: state.login.password
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setPasswordText: _LoginPageModule.setPasswordText,
    setEmailText: _LoginPageModule.setEmailText,
    login: _LoginPageModule.login
  }, dispatch);
};

LoginPage.propTypes = {
  setPasswordText: _propTypes2.default.func.isRequired,
  setEmailText: _propTypes2.default.func.isRequired,
  login: _propTypes2.default.func.isRequired,
  email: _propTypes2.default.string.isRequired,
  password: _propTypes2.default.string.isRequired

};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginPage);
//# sourceMappingURL=LoginPage.js.map