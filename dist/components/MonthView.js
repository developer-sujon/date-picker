"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MonthView = function MonthView(_ref) {
  var startDate = _ref.startDate,
    setStartDate = _ref.setStartDate,
    setEndDate = _ref.setEndDate;
  var handleMonthChange = function handleMonthChange(date) {
    if (!date) return; // Handle null case

    var start = new Date(date.getFullYear(), date.getMonth(), 1);
    var end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setStartDate(start);
    setEndDate(end);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "month-view"
  }, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    inline: true,
    selected: startDate,
    onChange: handleMonthChange,
    showMonthYearPicker: true,
    dateFormat: "yyyy/MM",
    placeholderText: "Select a month",
    className: "form-control date-picker"
  }));
};
var _default = exports["default"] = MonthView;