// WeekView.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WeekView = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const handleWeekChange = (date) => {
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();
    const start = new Date(
      selectedDate.setDate(selectedDate.getDate() - dayOfWeek)
    ); // First day of the week (Sunday)
    const end = new Date(selectedDate.setDate(selectedDate.getDate() + 6)); // Last day of the week (Saturday)

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="week-view">
      <DatePicker
        inline
        selected={startDate}
        onChange={handleWeekChange}
        showWeekNumbers
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a week"
        showWeekPicker
        className="form-control date-picker"
      />
    </div>
  );
};

export default WeekView;
