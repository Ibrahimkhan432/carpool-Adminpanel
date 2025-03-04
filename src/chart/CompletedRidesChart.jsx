import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const CompletedRidesChart = () => {
  const [ridesData, setRidesData] = useState([
    { name: "Jan", rides: 15 },
    { name: "Feb", rides: 20 },
    { name: "Mar", rides: 18 },
    { name: "Apr", rides: 25 },
    { name: "May", rides: 30 },
  ]);

  // Simulating real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRidesData((prevData) =>
        prevData.map((month) => ({
          ...month,
          rides: Math.floor(Math.random() * 40) + 10, 
        }))
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-300  rounded-2xl text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Completed Rides</h2>
      <LineChart width={500} height={190} data={ridesData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff50" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip contentStyle={{ backgroundColor: "#4F46E5", color: "#fff" }} />
        <Line type="monotone" dataKey="rides" stroke="#ffcc00" strokeWidth={3} dot={{ r: 6, fill: "#ffcc00" }} />
      </LineChart>
    </div>
  );
};

export default CompletedRidesChart;
