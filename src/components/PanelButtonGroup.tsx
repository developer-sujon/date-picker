import React from "react";
import { Button, ButtonGroup } from "reactstrap";

interface PanelButtonGroupProps {
  activePanel: string;
  onPanelClick: (panel: string) => void;
}

const PanelButtonGroup: React.FC<PanelButtonGroupProps> = ({ activePanel, onPanelClick }) => {
  return (
    <ButtonGroup className="panels-choices mb-3">
      {["Range", "Week", "Month", "Quarter", "Year"].map((panel) => (
        <Button
          key={panel}
          color={activePanel === panel ? "primary" : "secondary"}
          onClick={() => onPanelClick(panel)}
          className={`panel-button ${activePanel === panel ? "is-current" : ""}`}
        >
          {panel}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default PanelButtonGroup;
