import React from "react";
import { DateRange } from "react-date-range";
import { FormGroup } from "reactstrap";

const DateRangePicker = ({ startDate, endDate, onDateChange }) => {
  return (
    <div className="custom-range">
      <h6>Select Date Range:</h6>
      <FormGroup>
        <DateRange
          showMonthAndYearPickers={false}
          showMonthArrow={false}
          showDateDisplay={false}
          ranges={[{ startDate, endDate, key: "selection" }]}
          onChange={onDateChange}
          rangeColors={["#3D91FF"]}
          calendarWidth={100}
          monthWidth={100}
          className="full-width" // Optional: Add full-width class
        />
      </FormGroup>
    </div>
  );
};

export default DateRangePicker;
