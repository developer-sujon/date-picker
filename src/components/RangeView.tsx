import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { FormGroup, Input, Label } from "reactstrap";

interface RangeViewProps {
  selectedRange: string;
  setSelectedRange: (range: string) => void;
  startDate?: Date; // Changed to optional
  setStartDate: (date: Date | undefined) => void; // Change to Date | undefined
  endDate?: Date; // Changed to optional
  setEndDate: (date: Date | undefined) => void; // Change to Date | undefined
  handleDateChange: (range: string) => void;
}

const RangeView: React.FC<RangeViewProps> = ({
  selectedRange,
  setSelectedRange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleDateChange,
}) => {
  // Effect to handle selectedRange changes and update dates accordingly
  useEffect(() => {
    handleDateChange(selectedRange);
  }, [selectedRange, handleDateChange]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const range = event.target.value;
    setSelectedRange(range);
  };

  return (
    <div className="range-view">
      <div className="preset-ranges d-flex flex-wrap">
        {[
          "today",
          "yesterday",
          "last7days",
          "last30days",
          "last90days",
          "last365days",
          "custom",
        ].map((range) => (
          <div className="preset" key={range}>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value={range}
                  checked={selectedRange === range}
                  onChange={handleRangeChange}
                />
                <span className="check"></span>
                <span>
                  {range.charAt(0).toUpperCase() +
                    range.slice(1).replace(/([A-Z])/g, " $1")}
                </span>
              </Label>
            </FormGroup>
          </div>
        ))}
      </div>

      <DatePicker
        inline
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update: [Date | null, Date | null]) => {
          setStartDate(update[0] || undefined); // Convert null to undefined
          setEndDate(update[1] || undefined); // Convert null to undefined
        }}
        dateFormat="yyyy/MM/dd"
        className="form-control date-picker"
        placeholderText="Select Date Range"
      />
    </div>
  );
};

export default RangeView;
