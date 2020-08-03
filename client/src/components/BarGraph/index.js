import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.tile = props.title;

    this.config = {
      labels: props.barlabels,
      datasets: [
        {
          label: props.graphlabel,
          backgroundColor: props.bgcolor,
          borderColor: props.bordercolor,
          borderWidth: 1,
          hoverBackgroundColor: props.hoverbgcolor,
          hoverBorderColor: props.hoverbordercolor,
          data: props.bardata,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h3>{this.tile}</h3>
        <Bar
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

export default BarGraph;
