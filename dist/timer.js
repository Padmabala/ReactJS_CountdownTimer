"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Countdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Countdown, _Component);

  function Countdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Countdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Countdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      days: parseInt(_this.props.days),
      hours: parseInt(_this.props.hours),
      mins: parseInt(_this.props.mins),
      secs: parseInt(_this.props.secs),
      msg: ""
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("heyyy", this.state);
      setInterval(function () {
        if (_this2.state.days === 0 && _this2.state.hours === 0 && _this2.state.mins === 0 && _this2.state.secs === 0) {
          _this2.setState({
            msg: "Countdown Complete"
          });
        } else {
          _this2.setState({
            secs: _this2.state.secs - 1
          });

          if (_this2.state.secs < 0) {
            _this2.setState({
              secs: 59
            });

            if (_this2.state.secs === 59) {
              _this2.setState({
                mins: _this2.state.mins > 0 ? _this2.state.mins - 1 : 59
              });

              if (_this2.state.mins === 59) {
                _this2.setState({
                  hours: _this2.state.hours > 0 ? _this2.state.hours - 1 : 23
                });

                if (_this2.state.hours === 23) {
                  _this2.setState({
                    days: _this2.state.days - 1
                  });
                }
              }
            }
          }
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          mins = _this$state.mins,
          secs = _this$state.secs,
          msg = _this$state.msg;
      return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, days, ":", hours, ":", mins, ":", secs), _react["default"].createElement("p", null, msg));
    }
  }]);

  return Countdown;
}(_react.Component);

Countdown.propTypes = {
  days: _propTypes["default"].number,
  hours: _propTypes["default"].number,
  mins: _propTypes["default"].number,
  secs: _propTypes["default"].number
};
var _default = Countdown;
exports["default"] = _default;