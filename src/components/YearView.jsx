import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

const YearView = ({ year, setYear, setStartDate, setEndDate }) => {
  const handleYearChange = (date) => {
    const selectedYear = date.getFullYear();
    setYear(selectedYear);

    // Set start and end dates for the selected year
    const start = new Date(selectedYear, 0, 1); // January 1st of the selected year
    const end = new Date(selectedYear, 11, 31); // December 31st of the selected year
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="year-view">
      <DatePicker
        inline
        selected={new Date(year, 0, 1)}
        onChange={handleYearChange}
        showYearPicker
        dateFormat="yyyy"
        className="form-control date-picker"
        placeholderText="Select Year"
        yearItemNumber={6}
      />
    </div>
  );
};

export default YearView;
