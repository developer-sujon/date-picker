"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactstrap = require("reactstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PresetRanges = function PresetRanges(_ref) {
  var selectedRange = _ref.selectedRange,
    onRangeChange = _ref.onRangeChange;
  var ranges = ["today", "yesterday", "last7days", "last30days", "last90days", "last365days", "custom"];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "preset-ranges mb-3"
  }, ranges.map(function (range) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "preset",
      key: range
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
      check: true
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
      check: true
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
      type: "radio",
      value: range,
      checked: selectedRange === range,
      onChange: onRangeChange
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "check"
    }), /*#__PURE__*/_react["default"].createElement("span", null, range.charAt(0).toUpperCase() + range.slice(1).replace(/([A-Z])/g, " $1")))));
  }));
};
var _default = exports["default"] = PresetRanges;