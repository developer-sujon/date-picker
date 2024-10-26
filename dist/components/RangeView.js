"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var _reactstrap = require("reactstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Import the styles

var RangeView = function RangeView(_ref) {
  var selectedRange = _ref.selectedRange,
    setSelectedRange = _ref.setSelectedRange,
    startDate = _ref.startDate,
    setStartDate = _ref.setStartDate,
    endDate = _ref.endDate,
    setEndDate = _ref.setEndDate,
    handleDateChange = _ref.handleDateChange;
  // Effect to handle selectedRange changes and update dates accordingly
  (0, _react.useEffect)(function () {
    handleDateChange(selectedRange);
  }, [selectedRange, handleDateChange]);
  var handleRangeChange = function handleRangeChange(event) {
    var range = event.target.value;
    setSelectedRange(range);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "range-view"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preset-ranges d-flex flex-wrap"
  }, ["today", "yesterday", "last7days", "last30days", "last90days", "last365days", "custom"].map(function (range) {
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
      onChange: handleRangeChange
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "check"
    }), /*#__PURE__*/_react["default"].createElement("span", null, range.charAt(0).toUpperCase() + range.slice(1).replace(/([A-Z])/g, " $1")))));
  })), /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    inline: true,
    selectsRange: true,
    startDate: startDate,
    endDate: endDate,
    onChange: function onChange(update) {
      setStartDate(update[0] || undefined); // Convert null to undefined
      setEndDate(update[1] || undefined); // Convert null to undefined
    },
    dateFormat: "yyyy/MM/dd",
    className: "form-control date-picker",
    placeholderText: "Select Date Range"
  }));
};
var _default = exports["default"] = RangeView;