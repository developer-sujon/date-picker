"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// QuarterView.tsx

var QuarterView = function QuarterView(_ref) {
  var startDate = _ref.startDate,
    setStartDate = _ref.setStartDate,
    setEndDate = _ref.setEndDate;
  var handleQuarterChange = function handleQuarterChange(date) {
    if (date) {
      var month = date.getMonth();
      var quarterStartMonth = Math.floor(month / 3) * 3;
      var start = new Date(date.getFullYear(), quarterStartMonth, 1);
      var end = new Date(date.getFullYear(), quarterStartMonth + 3, 0);
      setStartDate(start);
      setEndDate(end);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "quarter-view"
  }, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    inline: true,
    selected: startDate,
    onChange: handleQuarterChange,
    showQuarterYearPicker: true,
    dateFormat: "yyyy, QQQ",
    placeholderText: "Select a quarter",
    className: "form-control date-picker"
  }));
};
var _default = exports["default"] = QuarterView;