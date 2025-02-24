import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Popup from "reactjs-popup";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit, CiMenuKebab } from "react-icons/ci";
import axios from "axios";
import { AppRoutes } from "../../constant/Constant";

const DriverList = () => {
  const navigate = useNavigate()
  const { AllDrivers } = useContext(AuthContext)
  const [searchDriver, setSearchDriver] = useState("")

// delete driver 
const deleteDriver = async (userId) => {
  try {
    const res = await axios.delete(`${AppRoutes.deleteUser}/${userId}`)
    console.log("res", res);
    window.location.reload();

  } catch (error) {
    console.log("error", error.message);
  }

};

  return (
    <div className="h-screen overflow-y-scroll  p-3  bg-white border-2 border-green-600 rounded-2xl justify-between">

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
        <span className="flex mb-5">
          <input
            onChange={(e) => setSearchDriver(e.target.value)}
            className="border-2 border-green-200 rounded-md mr-4" type="search" name="" id="" placeholder="Seacrh User" />
          <div className="text-sm mr-8 items-center justify-center">
            Total Drivers : {AllDrivers.length}
          </div>
        </span>
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
            {AllDrivers
              .filter((data) => {
                if (searchDriver === "") {
                  return data;
                } else if (
                  data.name.toLowerCase().includes(searchDriver.toLowerCase()) ||
                  data.email.toLowerCase().includes(searchDriver.toLowerCase()) ||
                  data.phoneNumber.toString().includes(searchDriver)

                ) {
                  return data;
                }
              })
              .map((driverData, index) => (
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
                    <ul className="flex space-x-2 text-xl">
                      {/* deletetBtn */}
                      <li className="text-red-600 cursor-pointer">
                        <Popup className="text-center"
                          trigger={
                            <MdDeleteForever />
                          }
                          modal
                          overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                        >
                          {(close) => (
                            <div className="bg-white p-4 rounded-lg shadow-lg w-[400px] mx-auto text-center">
                              {/* Header */}
                              <div className="text-2xl font-semibold text-red-900 flex justify-end">
                                <button onClick={close} className="text-red-500 text-xl cursor-pointer">
                                  ✖
                                </button>
                              </div>
                              <div className="flex flex-col">
                                <div className="">
                                  <h1>Are you want to delete ?</h1>
                                  <div className="flex justify-center mt-8">
                                    <button
                                      onClick={() => deleteDriver(driverData._id)}
                                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-bold py-2 px-4 rounded-md">
                                      Delete
                                    </button>

                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup></li>
                      {/* EditBtn */}
                      <li className="text-black cursor-pointer">
                        <Popup className="text-center"
                          trigger={
                            <CiEdit />
                          }
                          modal
                          overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                        >
                          {(close) => (
                            <div className="bg-white p-4 rounded-lg shadow-lg w-[600px] mx-auto text-center">
                              {/* Header */}
                              <div className="text-2xl font-semibold text-red-900 flex justify-end">
                                <button onClick={close} className="text-red-500 text-xl cursor-pointer">
                                  ✖
                                </button>
                              </div>
                              <div className="flex flex-col mt-4">
                                <div className="flex flex-row justify-between">
                                  <div className="flex flex-col w-1/2">
                                    <label className="text-sm">Name</label>
                                    <input
                                      type="text"
                                      className="border-2 border-gray-300 p-2 rounded-lg"
                                    />
                                  </div>
                                  <div className="flex flex-col w-1/2 ml-4">
                                    <label className="text-sm">Email</label>
                                    <input
                                      type="text"
                                      className="border-2 border-gray-300 p-2 rounded-lg"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row justify-between mt-4">
                                  <div className="flex flex-col w-1/2 ml-4">
                                    <label className="text-sm">CNIC</label>
                                    <input
                                      type="text"
                                      className="border-2 border-gray-300 p-2 rounded-lg"
                                    />
                                  </div>
                                  <div className="flex flex-col w-1/2 ml-4">
                                    <label className="text-sm">Contact</label>
                                    <input
                                      type="text"
                                      className="border-2 border-gray-300 p-2 rounded-lg"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row justify-between mt-4">
                                  <div className="flex flex-col w-1/2 ml-4 cursor-pointer">
                                    <label className="text-sm ">Gender</label>
                                    <select className="border-2 border-gray-300 p-2 rounded-lg">
                                      <option disabled >Select Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </div>
                                  <div className="flex flex-col w-1/2 ml-4 cursor-pointer">
                                    <label className="text-sm">Vehicle</label>
                                    <select className="border-2 border-gray-300 p-2 rounded-lg">
                                      <option disabled>Select Car</option>
                                      <option value="Male">Car</option>
                                      <option value="Female" cl>Bike</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="flex justify-center mt-4">
                                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup></li>
                      {/* DetailBtn */}
                      <li className=" cursor-pointer">
                        <Popup className="text-center"
                          trigger={
                            <CiMenuKebab />
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
                                <button className="w-full border-2 border-blue-500 hover:bg-blue-300 text-blue-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
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
                        </Popup></li>
                    </ul>
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
