import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { FormGroup, Input, Label } from "reactstrap";

const RangeView = ({
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
  }, [selectedRange]);

  const handleRangeChange = (event) => {
    const range = event.target.value;
    setSelectedRange(range);
  };

  return (
    <div className="date-range-picker">
      <div className="preset-ranges mb-3 d-flex flex-wrap">
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

      {/* Date Picker for Custom Range */}
      <div className="custom-range">
        <FormGroup>
          <DatePicker
            inline
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setStartDate(update[0]);
              setEndDate(update[1]);
            }}
            dateFormat="yyyy/MM/dd"
            className="form-control date-picker"
            placeholderText="Select Date Range"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default RangeView;
