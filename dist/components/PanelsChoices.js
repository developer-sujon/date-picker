"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
var _utils = require("../utils");
var _MonthView = _interopRequireDefault(require("./MonthView"));
var _QuarterView = _interopRequireDefault(require("./QuarterView"));
var _RangeView = _interopRequireDefault(require("./RangeView"));
var _WeekView = _interopRequireDefault(require("./WeekView"));
var _YearView = _interopRequireDefault(require("./YearView"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Kanapicker = function Kanapicker(_ref) {
  var onPanelChange = _ref.onPanelChange;
  var _useState = (0, _react.useState)("Range"),
    _useState2 = _slicedToArray(_useState, 2),
    activePanel = _useState2[0],
    setActivePanel = _useState2[1];
  var _useState3 = (0, _react.useState)("today"),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRange = _useState4[0],
    setSelectedRange = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date()),
    _useState6 = _slicedToArray(_useState5, 2),
    startDate = _useState6[0],
    _setStartDate = _useState6[1];
  var _useState7 = (0, _react.useState)(new Date()),
    _useState8 = _slicedToArray(_useState7, 2),
    endDate = _useState8[0],
    _setEndDate = _useState8[1];
  var _useState9 = (0, _react.useState)(new Date().getFullYear()),
    _useState10 = _slicedToArray(_useState9, 2),
    year = _useState10[0],
    setYear = _useState10[1];
  var handlePanelClick = function handlePanelClick(panel) {
    setActivePanel(panel);
  };
  var handleDateChange = function handleDateChange(range) {
    var today = new Date();
    switch (range) {
      case "yesterday":
        _setStartDate(new Date(today.setDate(today.getDate() - 1)));
        _setEndDate(new Date(today));
        break;
      case "last7days":
        _setStartDate(new Date(today.setDate(today.getDate() - 6)));
        _setEndDate(new Date());
        break;
      case "last30days":
        _setStartDate(new Date(today.setDate(today.getDate() - 29)));
        _setEndDate(new Date());
        break;
      case "last90days":
        _setStartDate(new Date(today.setDate(today.getDate() - 89)));
        _setEndDate(new Date());
        break;
      case "last365days":
        _setStartDate(new Date(today.setFullYear(today.getFullYear() - 1)));
        _setEndDate(new Date());
        break;
      case "year":
        _setStartDate(new Date(year, 0, 1));
        _setEndDate(new Date(year, 11, 31));
        break;
      default:
        _setStartDate(new Date());
        _setEndDate(new Date());
        break;
    }
  };
  var logCurrentDates = function logCurrentDates() {
    var dateRange = (0, _utils.setStartAndEndTime)(startDate, endDate);
    onPanelChange(dateRange);
  };
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Container, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "yup-daterange-picker"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.ButtonGroup, {
    className: "panels-choices d-flex flex-wrap",
    style: {
      gap: "10px"
    }
  }, ["Range", "Week", "Month", "Quarter", "Year"].map(function (panel) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
      key: panel,
      color: activePanel === panel ? "primary" : "secondary",
      onClick: function onClick() {
        return handlePanelClick(panel);
      },
      className: "panel-button ".concat(activePanel === panel ? "is-current" : "")
    }, panel);
  })), activePanel === "Range" && /*#__PURE__*/_react["default"].createElement(_RangeView["default"], {
    selectedRange: selectedRange,
    setSelectedRange: setSelectedRange,
    startDate: startDate,
    setStartDate: function setStartDate(date) {
      return _setStartDate(date !== null && date !== void 0 ? date : new Date());
    } // Ensure a date is passed
    ,
    endDate: endDate,
    setEndDate: function setEndDate(date) {
      return _setEndDate(date !== null && date !== void 0 ? date : new Date());
    } // Ensure a date is passed
    ,
    handleDateChange: handleDateChange
  }), activePanel === "Week" && /*#__PURE__*/_react["default"].createElement(_WeekView["default"], {
    startDate: startDate,
    endDate: endDate,
    setStartDate: _setStartDate,
    setEndDate: _setEndDate
  }), activePanel === "Month" && /*#__PURE__*/_react["default"].createElement(_MonthView["default"], {
    startDate: startDate,
    setStartDate: _setStartDate,
    setEndDate: _setEndDate
  }), activePanel === "Quarter" && /*#__PURE__*/_react["default"].createElement(_QuarterView["default"], {
    startDate: startDate,
    setStartDate: _setStartDate,
    setEndDate: _setEndDate
  }), activePanel === "Year" && /*#__PURE__*/_react["default"].createElement(_YearView["default"], {
    year: year,
    setYear: setYear,
    setStartDate: _setStartDate,
    setEndDate: _setEndDate
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    color: "info",
    onClick: logCurrentDates,
    className: "mt-3"
  }, "Log Current Dates")))));
};
var _default = exports["default"] = Kanapicker;