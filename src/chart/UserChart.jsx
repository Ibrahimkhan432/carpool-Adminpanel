import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Silver", 10.49, "silver"],
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function UserChart() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="50%" data={data} className="mb-8"/>
  );
}
