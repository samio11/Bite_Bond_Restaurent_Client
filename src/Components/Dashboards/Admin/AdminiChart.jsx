import React from "react";
import { Chart } from "react-google-charts";
const AdminiChart = ({chartData}) => {
     const options = {
        isStacked: true,
        height: 300,
        legend: { position: "top", maxLines: 3 },
        vAxis: { minValue: 0 },
      };
    return (
        <Chart
        chartType="AreaChart"
        width="100%"
        height="500px"
        data={chartData}
        options={options}
      />
    );
};

export default AdminiChart;