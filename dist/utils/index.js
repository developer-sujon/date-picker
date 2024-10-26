"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStartAndEndTime = void 0;
var setStartAndEndTime = exports.setStartAndEndTime = function setStartAndEndTime(startDate, endDate) {
  var formattedStart = new Date(startDate);
  formattedStart.setHours(0, 0, 0, 0); // Set to 12:00 AM

  var formattedEnd = new Date(endDate);
  formattedEnd.setHours(23, 59, 59, 999); // Set to 11:59 PM

  return {
    startDate: formattedStart,
    endDate: formattedEnd
  };
};