// PanelsChoices.js
import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { setStartAndEndTime } from "../utils/utils";
import MonthView from "./MonthView";
import QuarterView from "./QuarterView";
import RangeView from "./RangeView";
import WeekView from "./WeekView";
import YearView from "./YearView";

const PanelsChoices = () => {
  const [activePanel, setActivePanel] = useState("Range");
  const [selectedRange, setSelectedRange] = useState("today");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());

  const handlePanelClick = (panel) => {
    setActivePanel(panel);
  };

  const handleDateChange = (range) => {
    const today = new Date();
    switch (range) {
      case "yesterday":
        setStartDate(new Date(today.setDate(today.getDate() - 1)));
        setEndDate(new Date(today));
        break;
      case "last7days":
        setStartDate(new Date(today.setDate(today.getDate() - 6)));
        setEndDate(new Date());
        break;
      case "last30days":
        setStartDate(new Date(today.setDate(today.getDate() - 29)));
        setEndDate(new Date());
        break;
      case "last90days":
        setStartDate(new Date(today.setDate(today.getDate() - 89)));
        setEndDate(new Date());
        break;
      case "last365days":
        setStartDate(new Date(today.setFullYear(today.getFullYear() - 1)));
        setEndDate(new Date());
        break;
      case "year":
        setStartDate(new Date(year, 0, 1));
        setEndDate(new Date(year, 11, 31));
        break;
      default:
        setStartDate(new Date());
        setEndDate(new Date());
        break;
    }
  };

  const logCurrentDates = () => {
    const { startDate: formattedStart, endDate: formattedEnd } =
      setStartAndEndTime(startDate, endDate);
    console.log("Start Date:", formattedStart);
    console.log("End Date:", formattedEnd);
  };

  return (
    <div className="yup-daterange-picker">
      <ButtonGroup
        className="panels-choices mb-3 d-flex"
        style={{ gap: "10px" }}
      >
        {["Range", "Week", "Month", "Quarter", "Year"].map((panel) => (
          <Button
            key={panel}
            color={activePanel === panel ? "primary" : "secondary"}
            onClick={() => handlePanelClick(panel)}
            className={`panel-button ${
              activePanel === panel ? "is-current" : ""
            }`}
          >
            {panel}
          </Button>
        ))}
      </ButtonGroup>

      {activePanel === "Range" && (
        <RangeView
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleDateChange={handleDateChange}
        />
      )}

      {activePanel === "Week" && (
        <WeekView
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}

      {activePanel === "Month" && (
        <MonthView
          startDate={startDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}

      {activePanel === "Quarter" && (
        <QuarterView
          startDate={startDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}

      {activePanel === "Year" && (
        <YearView
          year={year}
          setYear={setYear}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}

      {/* Button to log the current start and end dates */}
      <Button color="info" onClick={logCurrentDates} className="mt-3">
        Log Current Dates
      </Button>
    </div>
  );
};

export default PanelsChoices;
