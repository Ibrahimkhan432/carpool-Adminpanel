import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getData() {
  return [
    ["Age", "Weight"],
    ...Array.from({ length: 16 }, () => [getRandomNumber(), getRandomNumber()]),
  ];
}

export const options = {
  title: "",
  legend: { position: "bottom" },
  animation: {
    duration: 4000,
    easing: "out",
  },
  vAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
};

export default function BarChart() {
  const [chartData, setChartData] = useState(getData);
  const [day, setDay] = useState(new Date().getDay());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
      setDay((d) => d + 1);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setChartData]);
  return (
    <>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
      />
    </>
  );
}
