import React from 'react';
import ActiceRidesChart from '../chart/ActiveRidesChart';
import ActiveriderChart from '../chart/ActiveRidesChart';
import CompletedRidesChart from '../chart/CompletedRidesChart';
const ActiveDriver = () => {

  const rideData = [
    { rider: "Ali Khan", client: "Zain Ahmed", initial: "Gulshan", destination: "DHA" },
    { rider: "Sara Malik", client: "Ayesha Noor", initial: "Saddar", destination: "Clifton" },
    { rider: "Hassan Raza", client: "Bilal Saeed", initial: "North Nazimabad", destination: "PECHS" },
  ];


  return (
    <div>
      <div className="container px-4 overflow-y-scroll bg-white h-150 rounded-2xl border-2 border-green-600">
        {/*activeride chart */}
        <div className=' main-div h-60 m-4 flex gap-6'>
          <div className='border-2 border-green-200 h-60 w-1/2 rounded-2xl  shadow-lg'>
            <ActiveriderChart />
          </div>
          {/*completedride chart */}
          <div className='border-2 border-green-200 h-60 w-1/2 rounded-2xl  shadow-lg'>
            <CompletedRidesChart />
          </div>
        </div>
        {/*detail table */}
        <h2 className="text-2xl font-extrabold text-gray-800 mt-8 ">
          Active  Rides
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white ">
          <table className="min-w-full table-auto bg-white shadow-md rounded-2xl border border-gray-300 ">
            <thead>
              <tr className="bg-green-600 text-white text-left ">
                <th className="px-6 py-3 font-semibold"> Driver</th>
                <th className="px-6 py-3 font-semibold">Client</th>
                <th className="px-6 py-3 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              {rideData.map((ride, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-green-100 transition-all"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{ride.rider}</td>
                  <td className="px-6 py-4 text-gray-700">{ride.client}</td>
                  <td className="px-6 py-4 text-gray-700">
                    📍 {ride.initial} ➝ {ride.destination}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
};

export default ActiveDriver;
