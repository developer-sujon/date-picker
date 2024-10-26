"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactstrap = require("reactstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PanelButtonGroup = function PanelButtonGroup(_ref) {
  var activePanel = _ref.activePanel,
    onPanelClick = _ref.onPanelClick;
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.ButtonGroup, {
    className: "panels-choices mb-3"
  }, ["Range", "Week", "Month", "Quarter", "Year"].map(function (panel) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
      key: panel,
      color: activePanel === panel ? "primary" : "secondary",
      onClick: function onClick() {
        return onPanelClick(panel);
      },
      className: "panel-button ".concat(activePanel === panel ? "is-current" : "")
    }, panel);
  }));
};
var _default = exports["default"] = PanelButtonGroup;