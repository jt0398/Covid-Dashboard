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
          <Col className="pt-2 m-5">
            <Button
              className="h3 p-3 mr-2"
              variant={mode === "C" ? "secondary" : "primary"}
              onClick={this.handleClick}
              data-mode="C"
            >
              Cumulative
            </Button>
            <Button
              className="h3 p-3"
              onClick={this.handleClick}
              data-mode="D"
              variant={mode === "D" ? "secondary" : "primary"}
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
