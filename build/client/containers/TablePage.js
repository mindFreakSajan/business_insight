'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Table = require('material-ui/Table');

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _create = require('material-ui/svg-icons/content/create');

var _create2 = _interopRequireDefault(_create);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _colors = require('material-ui/styles/colors');

var _PageBase = require('../components/PageBase');

var _PageBase2 = _interopRequireDefault(_PageBase);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TablePage = function TablePage() {

  var styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed'
    },
    editButton: {
      fill: _colors.grey500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };

  return _react2.default.createElement(
    _PageBase2.default,
    { title: 'View Products',
      navigation: 'Application / View Products' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/form' },
        _react2.default.createElement(
          _FloatingActionButton2.default,
          { style: styles.floatingActionButton, backgroundColor: _colors.pink500 },
          _react2.default.createElement(_add2.default, null)
        )
      ),
      _react2.default.createElement(
        _Table.Table,
        null,
        _react2.default.createElement(
          _Table.TableHeader,
          null,
          _react2.default.createElement(
            _Table.TableRow,
            null,
            _react2.default.createElement(
              _Table.TableHeaderColumn,
              { style: styles.columns.id },
              'ID'
            ),
            _react2.default.createElement(
              _Table.TableHeaderColumn,
              { style: styles.columns.name },
              'Name'
            ),
            _react2.default.createElement(
              _Table.TableHeaderColumn,
              { style: styles.columns.price },
              'Price'
            ),
            _react2.default.createElement(
              _Table.TableHeaderColumn,
              { style: styles.columns.category },
              'Category'
            ),
            _react2.default.createElement(
              _Table.TableHeaderColumn,
              { style: styles.columns.edit },
              'Edit'
            )
          )
        ),
        _react2.default.createElement(
          _Table.TableBody,
          null,
          _data2.default.tablePage.items.map(function (item) {
            return _react2.default.createElement(
              _Table.TableRow,
              { key: item.id },
              _react2.default.createElement(
                _Table.TableRowColumn,
                { style: styles.columns.id },
                item.id
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                { style: styles.columns.name },
                item.name
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                { style: styles.columns.price },
                item.price
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                { style: styles.columns.category },
                item.category
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                { style: styles.columns.edit },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: 'button', to: '/form' },
                  _react2.default.createElement(
                    _FloatingActionButton2.default,
                    { zDepth: 0,
                      mini: true,
                      backgroundColor: _colors.grey200,
                      iconStyle: styles.editButton },
                    _react2.default.createElement(_create2.default, null)
                  )
                )
              )
            );
          })
        )
      )
    )
  );
};

exports.default = TablePage;
//# sourceMappingURL=TablePage.js.map