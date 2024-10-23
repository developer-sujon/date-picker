import React from "react";

const DateRangeDisplay = ({ selectedRange, startDate, endDate }) => {
  return (
    <div>
      <p>
        Selected Range:{" "}
        {selectedRange.charAt(0).toUpperCase() +
          selectedRange.slice(1).replace(/([A-Z])/g, " $1")}
      </p>
      <p>
        Start Date: {startDate.toLocaleDateString()} - End Date:{" "}
        {endDate.toLocaleDateString()}
      </p>
    </div>
  );
};

export default DateRangeDisplay;
