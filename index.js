'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classed = {};
var factory = function factory(tagName) {
    return function (classes) {
        return function (props) {
            var className = (0, _classnames2.default)(classes, props.className);
            return _react2.default.createElement(tagName, _extends({}, props, { className: className }));
        };
    };
};

Object.keys(_react2.default.DOM).forEach(function (tagName) {
    classed[tagName] = factory(tagName);
});

exports.default = classed;
