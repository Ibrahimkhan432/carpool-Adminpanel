import { React, useContext } from "react";
import BarChart from "../chart/BarChart";
import MapChart from "../chart/MapChart";
import PieChart from "../chart/PieChart";
import { AuthContext } from "../context/AuthContext";
import { People } from "@mui/icons-material";
const Dashboard = () => {

  const { AllUsers } = useContext(AuthContext);
  const { AllDrivers } = useContext(AuthContext);
  
  return (
    <div className="min-h-screen">
      <div className="flex flex-row   rounded-2xl">
        <div className=" w-full rounded-2xl  ">
          <div className="h-50 w-full flex md:flex-row flex-col gap-6">
            <div className="bg-white w-1/2 h-50 rounded-2xl border-2 border-green-200 ">
              <div className="flex flex-row justify-between mt-4 mx-4">
                <h1 className="font-semibold ">Total Users</h1>
                <People className="text-blue-600" />
                <div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold mt-3 mx-4">{AllUsers.length}</h1>
            </div>
            <div className="bg-white w-1/2 h-50 rounded-2xl border-2 border-green-200">
              <div className="flex flex-row justify-between mt-4 mx-4">
                <h1 className="font-semibold ">Total Drivers</h1>
                <People className="text-green-600" />
                <div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold mt-3 mx-4">{AllDrivers.length}</h1>
            </div>
            <div className="bg-white w-1/2 h-50 rounded-2xl border-2 border-green-200">
              <div className="flex flex-row mt-4 mx-4 justify-between">
                <h1 className="font-semibold ">Pending Request</h1>
                <People className="text-red-600" />
                <div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold mt-3 mx-4">5</h1>
            </div>
            <div className="bg-white  w-1/2 h-50 rounded-2xl border-green-200">
              <PieChart/>
            </div>
          </div>
          <div className="w-full flex flex-col  md:flex-row  gap-6">
            <div className="bg-white w-1/2 h-95 mt-4 rounded-4xl">
              <BarChart/>
            </div>
            <div className="bg-white w-1/2 h-95 mt-4 rounded-xl  border-green-200">
              <MapChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
