// QuarterView.tsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface QuarterViewProps {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const QuarterView: React.FC<QuarterViewProps> = ({
  startDate,
  setStartDate,
  setEndDate,
}) => {
  const handleQuarterChange = (date: Date | null) => {
    if (date) {
      const month = date.getMonth();
      const quarterStartMonth = Math.floor(month / 3) * 3;
      const start = new Date(date.getFullYear(), quarterStartMonth, 1);
      const end = new Date(date.getFullYear(), quarterStartMonth + 3, 0);

      setStartDate(start);
      setEndDate(end);
    }
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
