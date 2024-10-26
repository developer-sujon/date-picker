import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MonthViewProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const MonthView: React.FC<MonthViewProps> = ({ startDate, setStartDate, setEndDate }) => {
  const handleMonthChange = (date: Date | null) => {
    if (!date) return; // Handle null case

    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="month-view">
      <DatePicker
        inline
        selected={startDate}
        onChange={handleMonthChange}
        showMonthYearPicker
        dateFormat="yyyy/MM"
        placeholderText="Select a month"
        className="form-control date-picker"
      />
    </div>
  );
};

export default MonthView;
