'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _colors = require('material-ui/styles/colors');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _PageBase = require('../components/PageBase');

var _PageBase2 = _interopRequireDefault(_PageBase);

var _FormPageModule = require('./FormPageModule');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormPage = function (_React$Component) {
  _inherits(FormPage, _React$Component);

  function FormPage(props) {
    _classCallCheck(this, FormPage);

    var _this = _possibleConstructorReturn(this, (FormPage.__proto__ || Object.getPrototypeOf(FormPage)).call(this, props));

    _this.onChangeHandler1 = function (e) {
      _this.props.setNameText(e.target.value);
    };

    _this.onChangeHandler2 = function (e) {
      _this.props.setPriceText(e.target.value);
    };

    _this.handleChange1 = function (event, index, value) {
      _this.props.setCategoryText(value);
    };

    _this.handleChange2 = function (event, value) {
      console.log(value.toString());
      _this.props.setExpDateText(value.toString());
    };

    _this.styles = {
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: _colors.grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }
    };
    return _this;
  }

  _createClass(FormPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageBase2.default,
        { title: 'Add Product',
          navigation: 'Application / Add Product' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_TextField2.default, {
            hintText: 'Name',
            floatingLabelText: 'Name',
            fullWidth: true,
            value: this.props.name,
            onChange: this.onChangeHandler1
          }),
          _react2.default.createElement(_TextField2.default, {
            hintText: 'Price',
            floatingLabelText: 'Price',
            fullWidth: true,
            type: 'number',
            value: parseInt(this.props.price),
            onChange: this.onChangeHandler2
          }),
          _react2.default.createElement(
            _SelectField2.default,
            {
              floatingLabelText: 'Category',
              value: this.props.category,
              fullWidth: true,
              onChange: this.handleChange1 },
            _react2.default.createElement(_MenuItem2.default, { key: 0, value: 'Conditioners', primaryText: 'Conditioners' }),
            _react2.default.createElement(_MenuItem2.default, { key: 1, value: 'Tv', primaryText: 'TV' }),
            _react2.default.createElement(_MenuItem2.default, { key: 2, value: 'Mobiles', primaryText: 'Mobiles' }),
            _react2.default.createElement(_MenuItem2.default, { key: 3, value: 'Computers', primaryText: 'Computers' })
          ),
          _react2.default.createElement(_DatePicker2.default, {
            hintText: 'Expiration Date',
            floatingLabelText: 'Expiration Date',
            fullWidth: true,
            value: new Date(this.props.expirationdate),
            onChange: this.handleChange2 }),
          _react2.default.createElement(
            'div',
            { style: this.styles.toggleDiv },
            _react2.default.createElement(_Toggle2.default, {
              label: 'Disabled',
              labelStyle: this.styles.toggleLabel
            })
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            'div',
            { style: this.styles.buttons },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              _react2.default.createElement(_RaisedButton2.default, { label: 'Cancel' })
            ),
            _react2.default.createElement(_RaisedButton2.default, { label: 'Save',
              style: this.styles.saveButton,
              type: 'submit',
              primary: true })
          )
        )
      );
    }
  }]);

  return FormPage;
}(_react2.default.Component);

;
var mapStateToProps = function mapStateToProps(state) {
  return {
    name: state.form.name,
    price: state.form.price,
    category: state.form.category,
    expirationdate: state.form.expirationdate
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setNameText: _FormPageModule.setNameText,
    setPriceText: _FormPageModule.setPriceText,
    setCategoryText: _FormPageModule.setCategoryText,
    setExpDateText: _FormPageModule.setExpDateText,
    save: _FormPageModule.save
  }, dispatch);
};

FormPage.propTypes = {
  setNameText: _propTypes2.default.func.isRequired,
  setPriceText: _propTypes2.default.func.isRequired,
  setCategoryText: _propTypes2.default.func.isRequired,
  setExpDateText: _propTypes2.default.func.isRequired,
  save: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.string.isRequired,
  category: _propTypes2.default.string.isRequired,
  expirationdate: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormPage);
//# sourceMappingURL=FormPage.js.map