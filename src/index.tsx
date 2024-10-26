import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";
import MonthView from "./components/MonthView";
import QuarterView from "./components/QuarterView";
import RangeView from "./components/RangeView";
import WeekView from "./components/WeekView";
import YearView from "./components/YearView";
import { setStartAndEndTime } from "./utils";

interface PanelsChoicesProps {
  onPanelChange: (selectedPanel: { startDate: Date; endDate: Date }) => void;
}

const Kanapicker: React.FC<PanelsChoicesProps> = ({ onPanelChange }) => {
  const [activePanel, setActivePanel] = useState<string>("Range");
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const handlePanelClick = (panel: string) => {
    setActivePanel(panel);
  };

  const handleDateChange = (range: string) => {
    const today = new Date();
    switch (range) {
      case "yesterday":
        setStartDate(new Date(today.setDate(today.getDate() - 1)));
        setEndDate(new Date(today as any));
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
    const dateRange = setStartAndEndTime(startDate, endDate);
    onPanelChange(dateRange);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="yup-daterange-picker">
            <ButtonGroup
              className="panels-choices d-flex flex-wrap"
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
                setStartDate={(date) => setStartDate(date ?? new Date())} // Ensure a date is passed
                endDate={endDate}
                setEndDate={(date) => setEndDate(date ?? new Date())} // Ensure a date is passed
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
        </Col>
      </Row>
    </Container>
  );
};

export default Kanapicker;
