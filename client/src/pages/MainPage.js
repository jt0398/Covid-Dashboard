import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import ActiveGraph from "../components/ActiveGraph";

class MainPage extends Component {
  state = {
    dates: [],
    active: [],
    confirmed: [],
    recovered: [],
    deceased: [],
    tested: [],
  };

  loadDailyData = () => {
    API.getDailyCount().then((res) => {
      let dates = [];
      let active = [];
      let confirmed = [];
      let recovered = [];
      let deceased = [];
      let tested = [];

      res.data.forEach((data) => {
        dates.push(data.dateReported);
        confirmed.push(data.confirmed);
        active.push(data.active);
        recovered.push(data.recovered);
        deceased.push(data.deceased);
        tested.push(data.tested);
      });

      this.setState({
        dates,
        active,
        confirmed,
        recovered,
        deceased,
        tested,
      });
    });
  };

  componentDidMount() {
    this.loadDailyData();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="6">
            {this.state.dates.length > 0 ? (
              <ActiveGraph
                graphlabels={this.state.dates}
                graphdata={this.state.active}
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
