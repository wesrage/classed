'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tagNames = require('./utils/tagNames');

var _tagNames2 = _interopRequireDefault(_tagNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classed = {};
var factory = function factory(tagName) {
    return function () {
        var _class, _temp;

        for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
            classes[_key] = arguments[_key];
        }

        return _temp = _class = function (_React$Component) {
            _inherits(WrappedComponent, _React$Component);

            function WrappedComponent() {
                _classCallCheck(this, WrappedComponent);

                return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
            }

            _createClass(WrappedComponent, [{
                key: 'render',
                value: function render() {
                    var _props = this.props,
                        className = _props.className,
                        innerRef = _props.innerRef,
                        props = _objectWithoutProperties(_props, ['className', 'innerRef']);

                    var newProps = _extends({}, props, {
                        className: (0, _classnames2.default)(_classnames2.default.apply(undefined, classes), className)
                    });
                    if (innerRef) {
                        newProps.ref = innerRef;
                    }
                    return _react2.default.createElement(tagName, newProps);
                }
            }]);

            return WrappedComponent;
        }(_react2.default.Component), _class.displayName = 'Classed.' + tagName, _temp;
    };
};

_tagNames2.default.forEach(function (tagName) {
    classed[tagName] = factory(tagName);
});

exports.default = classed;
