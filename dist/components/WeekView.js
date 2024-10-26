"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var WeekView = function WeekView(_ref) {
  var startDate = _ref.startDate,
    setStartDate = _ref.setStartDate,
    endDate = _ref.endDate,
    setEndDate = _ref.setEndDate;
  var handleWeekChange = function handleWeekChange(date) {
    if (!(date instanceof Date)) return; // Make sure it's a valid Date instance

    // Create new instances to avoid modifying the original date
    var selectedDate = new Date(date);
    var dayOfWeek = selectedDate.getDay();

    // Calculate the start of the week (Sunday)
    var start = new Date(selectedDate);
    start.setDate(selectedDate.getDate() - dayOfWeek);

    // Calculate the end of the week (Saturday)
    var end = new Date(start);
    end.setDate(start.getDate() + 6);

    // Update state with the new start and end dates
    setStartDate(start);
    setEndDate(end);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "week-view"
  }, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    inline: true,
    selected: startDate,
    onChange: function onChange(date) {
      return handleWeekChange(date);
    },
    dateFormat: "yyyy/MM/dd",
    placeholderText: "Select a week",
    showWeekPicker: true,
    className: "form-control date-picker"
  }));
};
var _default = exports["default"] = WeekView;