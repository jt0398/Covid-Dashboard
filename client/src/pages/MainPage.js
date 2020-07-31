import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DailyContainer from "../components/DailyContainer";

class MainPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <DailyContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
