import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DailyContainer from "../components/DailyContainer";
import CumulativeContainer from "../components/CumulativeContainer";
import NationalContainer from "../components/NationalContainer";

class MainPage extends Component {
  state = {
    mode: "C",
  };

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ mode: event.currentTarget.getAttribute("data-mode") });
  };

  render() {
    let mode = this.state.mode;

    return (
      <Container>
        <Row>
          <Col className="my-5">
            <NationalContainer />
          </Col>
        </Row>
        <Row>
          <Col className="m-2">
            <Button
              className="h3 p-3 mr-2 b-1"
              variant={mode === "C" ? "dark" : "light"}
              onClick={this.handleClick}
              data-mode="C"
            >
              Cumulative
            </Button>
            <Button
              className="h3 p-3"
              onClick={this.handleClick}
              data-mode="D"
              variant={mode === "D" ? "dark" : "light"}
            >
              Daily
            </Button>
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
