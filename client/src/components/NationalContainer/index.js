import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import API from "../../utils/API";
import "./style.css";

class NationalContainer extends Component {
  state = {
    active: 0,
    confirmed: 0,
    recovered: 0,
    deceased: 0,
    tested: 0,
  };

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  loadNationalData = () => {
    API.getNationalCount()
      .then((res) => {
        console.log(res);
        this.setState({
          active: res.data[0].active,
          confirmed: res.data[0].confirmed,
          recovered: res.data[0].recovered,
          deceased: res.data[0].deceased,
          tested: res.data[0].tested,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  componentDidMount() {
    this.loadNationalData();
  }

  render() {
    return (
      <CardDeck>
        {this.state.active > 0 ? (
          <>
            <Card className="text-center pt-2">
              <h4 className="active">Active</h4>
              <h2>{this.formatNumber(this.state.active)}</h2>
            </Card>
            <Card className="text-center pt-2">
              <h4 className="confirmed">Confirmed</h4>
              <h2>{this.formatNumber(this.state.confirmed)}</h2>
            </Card>
            <Card className="text-center pt-2">
              <h4 className="recovered">Recovered</h4>
              <h2>{this.formatNumber(this.state.recovered)}</h2>
            </Card>
            <Card className="text-center pt-2">
              <h4 className="deceased">Deceased</h4>
              <h2>{this.formatNumber(this.state.deceased)}</h2>
            </Card>
            <Card className="text-center pt-2">
              <h4 className="tested">Tested</h4>
              <h2>{this.formatNumber(this.state.tested)}</h2>
            </Card>
          </>
        ) : (
          ""
        )}
      </CardDeck>
    );
  }
}

export default NationalContainer;
