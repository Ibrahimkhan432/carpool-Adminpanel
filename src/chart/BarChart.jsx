import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", Completed: 120, Canceled: 10 },
  { name: "Feb", Completed: 98, Canceled: 20 },
  { name: "Mar", Completed: 130, Canceled: 5 },
  { name: "Apr", Completed: 150, Canceled: 15 },
  { name: "May", Completed: 160, Canceled: 12 },
];

const RideAnalyticsChart = () => {
  return (
    <div className=" p-4">
      <h2 className="text-md  font-semibold text-gray-700">Ride Analytics</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Completed" fill="#4CAF50" radius={[5, 5, 0, 0]} />
          <Bar dataKey="Canceled" fill="#F44336" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RideAnalyticsChart;
