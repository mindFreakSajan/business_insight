'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _InfoBox = require('../dashboard/InfoBox');

var _InfoBox2 = _interopRequireDefault(_InfoBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<InfoBox />', function () {
  it('should have a span with the title and value', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InfoBox2.default, { title: 'Title', value: '1500' }));
    var content = wrapper.find('div > span');

    (0, _chai.expect)(content).to.have.length.of(2);
    (0, _chai.expect)('Title').to.equal(content.at(0).text());
    (0, _chai.expect)('1500').to.equal(content.at(1).text());
  });
});
//# sourceMappingURL=InfoBox.spec.js.map