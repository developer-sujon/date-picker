import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface WeekViewProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}

const WeekView: React.FC<WeekViewProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleWeekChange = (date: Date | string) => {
    if (!(date instanceof Date)) return; // Make sure it's a valid Date instance

    // Create new instances to avoid modifying the original date
    const selectedDate = new Date(date as unknown as string);
    const dayOfWeek = selectedDate.getDay();

    // Calculate the start of the week (Sunday)
    const start = new Date(selectedDate as unknown as string);
    start.setDate(selectedDate.getDate() - dayOfWeek);

    // Calculate the end of the week (Saturday)
    const end = new Date(start as unknown as string);
    end.setDate(start.getDate() + 6);

    // Update state with the new start and end dates
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="week-view">
      <DatePicker
        inline
        selected={startDate}
        onChange={(date) => handleWeekChange(date as Date as unknown as string)}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a week"
        showWeekPicker
        className="form-control date-picker"
      />
    </div>
  );
};

export default WeekView;
