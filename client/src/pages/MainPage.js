import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import API from "../utils/API";

class MainPage extends Component {
  state = {
    dailyData: [],
  };

  loadDailyData = () => {
    API.getDailyCount().then((res) => {
      this.setState({
        dailyData: res.data,
      });

      console.log("Dail Data:" + this.state.dailyData);
    });
  };

  componentDidMount() {
    this.loadDailyData();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Main Page</Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
