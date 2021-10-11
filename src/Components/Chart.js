import React, { Component } from "react";
import { Pie } from "react-chartjs-2";


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Midwest", "South", "West", "Northeast"],
        datasets: [
          {
            label: "Region",
            data: [48, 71, 61, 70],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,199,132,0.6)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{ maintainAspectRatio: false }}
          width={450}
          height={400} 
        />
      </div>
    );
  }
}

export default Chart;
