// QuarterView.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const QuarterView = ({ startDate, setStartDate, setEndDate }) => {
  const handleQuarterChange = (date) => {
    const month = date.getMonth();
    const quarterStartMonth = Math.floor(month / 3) * 3;
    const start = new Date(date.getFullYear(), quarterStartMonth, 1);
    const end = new Date(date.getFullYear(), quarterStartMonth + 3, 0);

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="quarter-view">
      <DatePicker
        inline
        selected={startDate}
        onChange={handleQuarterChange}
        showQuarterYearPicker
        dateFormat="yyyy, QQQ"
        placeholderText="Select a quarter"
        className="form-control date-picker"
      />
    </div>
  );
};

export default QuarterView;
