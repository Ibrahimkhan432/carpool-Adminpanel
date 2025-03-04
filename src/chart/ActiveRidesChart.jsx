import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ActiveriderChart = () => {
  const [ridersData, setRidersData] = useState([
    { name: "Area 1", riders: 5 },
    { name: "Area 2", riders: 8 },
    { name: "Area 3", riders: 3 },
    { name: "Area 4", riders: 2 },
    { name: "Area 5", riders: 1 },
    { name: "Area 6", riders: 4 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRidersData((prevData) =>
        prevData.map((area) => ({
          ...area,
          riders: Math.floor(Math.random() * 20), 
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl">
      <h2 className="text-xl font-bold  text-center mb-4">Active Rides</h2>
      <BarChart width={500} height={200} data={ridersData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="riders" fill="#4F46E5" barSize={50} />
      </BarChart>
    </div>
  );
};

export default ActiveriderChart;
