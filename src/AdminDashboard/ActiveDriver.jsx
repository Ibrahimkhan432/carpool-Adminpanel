// ActiveDriver.js
import React from 'react';

const ActiveDriver = () => {

  const drivers = [
    { user: 'ibrahim', driver: 'ali', InitialLocation: 'malir', DestinationLocation: 'shahra e faisal' },
    { user: 'bilal', driver: 'ather', InitialLocation: 'korangi', DestinationLocation: 'Orangi' },
  ];

  return (
    <div>
      {/* Main Content */}
      <div className="px-4 overflow-y-scroll bg-white h-150 rounded-2xl border-2 border-green-600">
        {/* Title */}
        <h1 className="text-2xl font-semibold  text-slate-900">Active Drivers</h1>
        {/* Table */}
        <div className="overflow-x-auto rounded-lg ">
          <table className="min-w-full table-auto bg-white  shadow-lg rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-6 py-2 text-left">Driver</th>
                <th className="px-6 py-2 text-left">User</th>
                <th className="px-6 py-2 text-left">Live Location</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{driver.driver}</td>
                  <td className="px-6 py-4">{driver.user}</td>
                  <td className="px-6 py-4">{driver.InitialLocation} ---- {driver.DestinationLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ActiveDriver;
