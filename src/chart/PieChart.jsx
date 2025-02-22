import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Drivers", "Total Drivers"],
  ["Users", 200],
  ["Male", 150],
  ["Female", 100],
];

const options = {
  title: "Drivers",
};

function PieChart() {
  return(
  <div className="">

  <Chart chartType="PieChart" data={data} options={options} className=""/>
  </div>
  )
}

export default PieChart;