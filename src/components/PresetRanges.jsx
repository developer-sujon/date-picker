import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const PresetRanges = ({ selectedRange, onRangeChange }) => {
  return (
    <div className="preset-ranges mb-3">
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
                onChange={onRangeChange}
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
  );
};

export default PresetRanges;
