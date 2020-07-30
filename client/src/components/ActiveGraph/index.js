import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "./style.css";

class ActiveGraph extends Component {
  constructor(props) {
    super(props);

    console.log("Graph Labels", props.graphlabels);

    this.config = {
      labels: props.graphlabels,
      datasets: [
        {
          label: "Active Cases",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: props.graphdata,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div>Active</div>
        <Bar data={this.config} />
      </>
    );
  }
}

export default ActiveGraph;
