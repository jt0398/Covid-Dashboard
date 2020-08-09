import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";
import LineGraph from "../LineGraph";

class DailyContainer extends Component {
  state = {
    dates: [],
    active: [],
    confirmed: [],
    recovered: [],
    deceased: [],
    tested: [],
  };

  loadCumulativeData = () => {
    API.getCumulativeCount()
      .then((res) => {
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
      })
      .catch((error) => console.error("Error", error));
  };

  componentDidMount() {
    this.loadCumulativeData();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="pb-5">
            {this.state.dates.length > 0 ? (
              <LineGraph
                title="Active"
                linelabels={this.state.dates}
                linedata={this.state.active}
                bgcolor="rgba(255,99,132,0.4)"
                bordercolor="rgba(255,51,51,1)"
                pointbordercolor="rgba(255,51,51,1)"
                pointhoverbgcolor="rgba(255,51,51,1)"
                pointhoverbordercolor="rgba(255,51,51,1)"
                graphlabel="Active Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="pb-5">
            {this.state.dates.length > 0 ? (
              <LineGraph
                title="Confirmed"
                linelabels={this.state.dates}
                linedata={this.state.confirmed}
                bgcolor="rgba(26,117,255,0.4)"
                bordercolor="rgba(26,117,255,1)"
                pointbordercolor="rgba(0,61,153,1)"
                pointhoverbgcolor="rgba(0,61,153,1)"
                pointhoverbordercolor="rgba(0,61,153,1)"
                graphlabel="Confirmed Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="pb-5">
            {this.state.dates.length > 0 ? (
              <LineGraph
                title="Recovered"
                linelabels={this.state.dates}
                linedata={this.state.recovered}
                bgcolor="rgba(0,179,60,0.4)"
                bordercolor="rgba(0,179,60,1)"
                pointbordercolor="rgba(0,102,34,1)"
                pointhoverbgcolor="rgba(0,102,34,1)"
                pointhoverbordercolor="rgba(0,102,34,1)"
                graphlabel="Recovered Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="pb-5">
            {this.state.dates.length > 0 ? (
              <LineGraph
                title="Deceased"
                linelabels={this.state.dates}
                linedata={this.state.deceased}
                bgcolor="rgba(102,102,102,0.4)"
                bordercolor="rgba(102,102,102,1)"
                pointbordercolor="rgba(51,51,51,1)"
                pointhoverbgcolor="rgba(51,51,51,1)"
                pointhoverbordercolor="rgba(51,51,51,1)"
                graphlabel="Deceased Cases"
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col className="pb-5">
            {this.state.dates.length > 0 ? (
              <LineGraph
                title="Tested"
                linelabels={this.state.dates}
                linedata={this.state.tested}
                bgcolor="rgba(115,0,230,0.4)"
                bordercolor="rgba(115,0,230,1)"
                pointbordercolor="rgba(64,0,128,1)"
                pointhoverbgcolor="rgba(64,0,128,1)"
                pointhoverbordercolor="rgba(64,0,128,1)"
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
