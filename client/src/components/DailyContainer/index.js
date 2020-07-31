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
          <Col className="p-5">
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
        <Row>
          <Col className="p-5">
            {this.state.dates.length > 0 ? (
              <BarGraph
                title="Confirmed"
                barlabels={this.state.dates}
                bardata={this.state.confirmed}
                bgcolor="rgba(26,117,255,0.2)"
                bordercolor="rgba(0,61,153,1)"
                hoverbgcolor="rgba(26,117,255,0.4)"
                hoverbordercolor="rgba(0,61,153,1)"
                graphlabel="Confirmed Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            {this.state.dates.length > 0 ? (
              <BarGraph
                title="Recovered"
                barlabels={this.state.dates}
                bardata={this.state.recovered}
                bgcolor="rgba(0,179,60,0.2)"
                bordercolor="rgba(0,102,34,1)"
                hoverbgcolor="rgba(0,179,60,0.4)"
                hoverbordercolor="rgba(0,102,34,1)"
                graphlabel="Recovered Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            {this.state.dates.length > 0 ? (
              <BarGraph
                title="Deceased"
                barlabels={this.state.dates}
                bardata={this.state.deceased}
                bgcolor="rgba(102,102,102,0.2)"
                bordercolor="rgba(51,51,51,1)"
                hoverbgcolor="rgba(102,102,102,0.4)"
                hoverbordercolor="rgba(51,51,51,1)"
                graphlabel="Deceased Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            {this.state.dates.length > 0 ? (
              <BarGraph
                title="Tested"
                barlabels={this.state.dates}
                bardata={this.state.tested}
                bgcolor="rgba(115,0,230,0.2)"
                bordercolor="rgba(64,0,128,1)"
                hoverbgcolor="rgba(115,0,230,0.4)"
                hoverbordercolor="rgba(64,0,128,1)"
                graphlabel="Tested Cases"
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
