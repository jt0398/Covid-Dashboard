import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DailyContainer from "../components/DailyContainer";
import CumulativeContainer from "../components/CumulativeContainer";

class MainPage extends Component {
  state = {
    mode: "C",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="pt-2 m-5">
            <Button className="h3 p-3 mr-2">Cumulative</Button>
            <Button className="h3 p-3">Daily</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.mode === "C" ? (
              <CumulativeContainer />
            ) : (
              <DailyContainer />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
