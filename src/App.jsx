import React from "react";
import { Col, Container, Row } from "reactstrap";
import PanelsChoices from "./components//PanelsChoices";

const App = () => {
  const handlePanelChange = (selectedPanel) => {
    console.log(`Selected panel: ${selectedPanel}`);
    // Handle the panel change logic here, e.g., update state, fetch data, etc.
  };

  return (
    <Container>
      <Row>
        <Col>
          <PanelsChoices onPanelChange={handlePanelChange} />
        </Col>
      </Row>{" "}
    </Container>
  );
};

export default App;
