import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";
import BarGraph from "../BarGraph";

class DailyContainer extends Component {
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
              <BarGraph
                title="Active"
                barlabels={this.state.dates}
                bardata={this.state.active}
                bgcolor="rgba(255,99,132,0.2)"
                bordercolor="rgba(255,99,132,1)"
                hoverbgcolor="rgba(255,99,132,0.4)"
                hoverbordercolor="rgba(255,99,132,1)"
                graphlabel="Active Cases"
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

export default DailyContainer;
