import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineGraph extends Component {
  constructor(props) {
    super(props);

    this.tile = props.title;

    this.config = {
      labels: props.linelabels,
      datasets: [
        {
          label: props.graphlabel,
          fill: false,
          lineTension: 0.1,
          backgroundColor: props.bgcolor,
          borderColor: props.bordercolor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: props.pointbordercolor,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: props.pointhoverbgcolor,
          pointHoverBorderColor: props.pointhoverbordercolor,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.linedata,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h3>{this.tile}</h3>
        <Line
          data={this.config}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </>
    );
  }
}

export default LineGraph;
