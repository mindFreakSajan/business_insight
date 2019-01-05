'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _SearchBox = require('./SearchBox');

var _SearchBox2 = _interopRequireDefault(_SearchBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SearchBox />', function () {
  it('should have a textbox with hintText \'Search\'', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SearchBox2.default, null));
    var actual = wrapper.find('TextField').prop('hintText');
    var expected = 'Search...';

    (0, _chai.expect)(expected).to.equal(actual);
  });
});
//# sourceMappingURL=SearchBox.spec.js.map