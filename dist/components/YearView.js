"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var YearView = function YearView(_ref) {
  var year = _ref.year,
    setYear = _ref.setYear,
    setStartDate = _ref.setStartDate,
    setEndDate = _ref.setEndDate;
  var handleYearChange = function handleYearChange(date) {
    var selectedYear = date.getFullYear();
    setYear(selectedYear);

    // Set start and end dates for the selected year
    var start = new Date(selectedYear, 0, 1); // January 1st of the selected year
    var end = new Date(selectedYear, 11, 31); // December 31st of the selected year
    setStartDate(start);
    setEndDate(end);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "year-view"
  }, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    inline: true,
    selected: new Date(year, 0, 1),
    onChange: function onChange(date) {
      return date && handleYearChange(date);
    },
    showYearPicker: true,
    dateFormat: "yyyy",
    className: "form-control date-picker",
    placeholderText: "Select Year",
    yearItemNumber: 6,
    popperClassName: "full-width-calendar"
  }));
};
var _default = exports["default"] = YearView;