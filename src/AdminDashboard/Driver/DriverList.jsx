import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Popup from "reactjs-popup";

const DriverList = () => {
  const navigate = useNavigate()
  const { AllDrivers } = useContext(AuthContext)

  return (
    <div className=" min-h-screen p-3  bg-white border-2 border-green-600 rounded-2xl justify-between">

      <div className=" text-2xl  flex flex-row text-slate-900 justify-between">
        <div className="font-semibold">Driver List</div>
        <div className="mb-4 space-x-4">
          <button
            onClick={() => navigate('/maledrivers')}
            className="cursor-pointer  p-1  text-white rounded-md  bg-green-400 w-25">Male</button>
          <button
            onClick={() => navigate('/femaledrivers')}
            className="cursor-pointer p-1 text-white rounded-md bg-green-400 w-25">Female</button>
        </div>
        <div className="text-sm text-center mr-10 items-center justify-center">
          Total Drivers : {AllDrivers.length}
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-green-600 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                S no.
              </th>
              <th scope="col" className="px-6 py-3">
                Driver Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                CNIC
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllDrivers.map((driverData, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {driverData.name}
                </th>
                <td className="px-6 py-4">{driverData.email}</td>
                <td className="px-6 py-4">{driverData.phoneNumber}</td>
                <td className="px-6 py-4">{driverData.nicNo}</td>
                <td className="px-6 py-4">{driverData.vehicleCategory}</td>
                <td className="px-6 py-4">
                  <Popup
                    trigger={
                      <button className="text-green-600 hover:bg-green-500 hover:text-white border-3  py-1 px-2 rounded-md cursor-pointer">
                        Manage User
                      </button>
                    }
                    modal
                    overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
                  >
                    {(close) => (
                      <div className="bg-white p-4 rounded-lg shadow-lg w-[600px] mx-auto text-center">
                        {/* Header */}
                        <div className="text-2xl font-semibold text-gray-900 flex justify-end">
                          <button onClick={close} className="text-red-500 text-xl cursor-pointer">
                            ✖
                          </button>
                        </div>

                        {/* User Info */}
                        <div className="mt-4 text-left space-y-2">
                          <span>
                            <img className="w-20 h-20 mx-auto rounded-full" src={driverData.profileImage} alt="Rounded avatar" />
                          </span>
                          <p><span className="font-semibold"> Role:</span> {driverData.role}</p>
                          <p><span className="font-semibold"> Gender:</span> {driverData.gender}</p>
                          <p><span className="font-semibold"> Name:</span> {driverData.name}</p>
                          <p><span className="font-semibold"> Email:</span> {driverData.email}</p>
                          <p><span className="font-semibold"> Contact:</span> {driverData.phoneNumber}</p>
                          <p><span className="font-semibold"> CNIC:</span> {driverData.nicNo}</p>
                          <p><span className="font-semibold"> Address:</span> {driverData.address}</p>
                          <p><span className="font-semibold"> Vehicle:</span> {driverData.vehicleCategory}</p>
                          <p><span className="font-semibold"> Vehicle No:</span> {driverData.vehicleNo}</p>
                          <p><span className="font-semibold"> Register Date:</span> {driverData.createdAt}</p>
                        </div>

                        {/* Buttons for Actions */}
                        <div className="mt-6 space-y-3">
                          <button className="w-full border-2 border-green-500 hover:bg-green-300 text-green-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
                            Approve User
                          </button>
                          <button className="w-full border-2 border-red-500 hover:bg-red-300 text-red-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
                          
                            Suspend User
                          </button>
                          <button className="w-full border-2 border-green-500 hover:bg-green-300 text-green-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
                            Track Activity
                          </button>
                        </div>
                        {/* Close Button */}
                        <div className="mt-4">
                          <button
                            onClick={close}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList;
