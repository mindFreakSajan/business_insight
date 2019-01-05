'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _PageBase = require('./PageBase');

var _PageBase2 = _interopRequireDefault(_PageBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<PageBase />', function () {
  it('should have a span with the navigation text', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PageBase2.default, { navigation: 'navigation' }));
    var actual = wrapper.find('span').text();
    var expected = 'navigation';

    (0, _chai.expect)(expected).to.equal(actual);
  });

  it('should have a header with the title text', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PageBase2.default, { title: 'title' }));
    var actual = wrapper.find('h3').text();
    var expected = 'title';

    (0, _chai.expect)(expected).to.equal(actual);
  });
});
//# sourceMappingURL=PageBase.spec.js.map