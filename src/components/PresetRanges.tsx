import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

interface PresetRangesProps {
  selectedRange: string;
  onRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PresetRanges: React.FC<PresetRangesProps> = ({
  selectedRange,
  onRangeChange,
}) => {
  const ranges = [
    "today",
    "yesterday",
    "last7days",
    "last30days",
    "last90days",
    "last365days",
    "custom",
  ];

  return (
    <div className="preset-ranges mb-3">
      {ranges.map((range) => (
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
