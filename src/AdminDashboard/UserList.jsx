import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { CiEdit, CiMenuKebab } from "react-icons/ci";
import axios from "axios";
import { AppRoutes } from "../constant/Constant";

const UserList = () => {
  const { AllUsers } = useContext(AuthContext);
  const [searchedUsers, setSearchedUsers] = useState(AllUsers);
  const [searchCnic, setSearchCnic] = useState("");
   const [editedUser, setEditedUser] = useState({
     name: "",
     email: "",
    nicNo: "",
    phoneNumber: "",
     gender: "",
    vehicleCategory: "",
  });

  
  // Delete user 
  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(`${AppRoutes.deleteUser}/${userId}`);
      console.log("Deleted User:", res);
      setSearchedUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log("Error deleting user:", error.message);
    }
  };

  //searc user by cnic
  const searchUserByCnic = async (e) => {
    e.preventDefault();
    const nicNo = searchCnic.trim();

    if (!nicNo) {
      setSearchedUsers(AllUsers);
      console.log("Please enter a valid CNIC number.");
      return;
    }

    try {
      const resp = await axios.post(AppRoutes.searchUserByCnic, { nicNo });
      console.log("Response:", resp.data);

      setSearchedUsers(resp.data.data ? [resp.data.data] : []);
    } catch (error) {
      console.log("Error:", error.message);
      setSearchedUsers([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSearchCnic(value);

    if (value === "") {
      setSearchedUsers(AllUsers);
    } else {
      const filteredUsers = AllUsers.filter((user) =>
        user.nicNo.includes(value)
      );
      setSearchedUsers(filteredUsers);
    }
  };

  //edit user information
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    
  };

  const updateUser = async () => {
    try {
      const res = await axios.put(`${AppRoutes.editUser}/${data._id}`, editedUser);
      console.log("User Updated:", res);
      alert("User updated successfully");
      close();
    } catch (error) {
      console.error("Error updating user:", error.message);
      alert("Error updating user");
    }
  };

  return (
    <div className="h-screen overflow-y-scroll p-2 bg-white rounded-2xl border-2 border-green-600">
      <div className="font-semibold flex justify-between  mt-2 mb-3 text-slate-900">
        <span className="text-2xl">User List</span>
        <span>
          <form onSubmit={searchUserByCnic}>
            <input
              className="border-2 border-green-200 rounded-md mr-4 placeholder:text-green-300 p-1"
              type="search"
              name="search"
              placeholder="Search CNIC"
              value={searchCnic}
              onChange={handleInputChange}
            />
            <button type="submit" className="text-green-600 border-2 rounded-md p-1 cursor-pointer hover:bg-green-100 ">
              Search
            </button>
          <span className="text-sm m-4">Total Users: {searchedUsers.length}</span>
          </form>
        </span>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 border-2 border-green-600">
          <thead className="text-xs text-white uppercase bg-green-600">
            <tr>
              <th className="px-2 py-3">S No.</th>
              <th className="px-2 py-3">Profile Img</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">CNIC</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchedUsers.map((data, index) => (
              <tr key={data._id} className="border-b hover:bg-green-100">
                <td className="px-6 py-4">{index + 1}.</td>
                <td className="px-6 py-4">
                  <img className="rounded-full w-13" src={data.profileImage} alt="Profile" />
                </td>
                <th className="px-6 py-4 font-medium text-gray-900">{data.name}</th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.role}</td>
                <td className="px-6 py-4">{data.phoneNumber}</td>
                <td className="px-6 py-4">{data.nicNo}</td>
                <td className="px-6 py-4">
                  <ul className="flex space-x-2 text-xl">
                    {/* Delete Button */}
                    <li className="text-red-600 cursor-pointer">
                      <Popup modal overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }} trigger={<MdDeleteForever />}>
                        {(close) => (
                          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <h1>Are you sure you want to delete?</h1>
                            <button
                              onClick={() => deleteUser(data._id)}
                              className="bg-red-600 text-white py-2 px-4 rounded-md mt-4 cursor-pointer">
                              Delete
                            </button>
                          </div>
                        )}
                      </Popup>
                    </li>
                    {/* Edit Button */}
                    <li className="text-black cursor-pointer">
                      <Popup
                        className="text-center"
                        trigger={<CiEdit />}
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

                            {/* Edit Form */}
                            <div className="flex flex-col mt-4">
                              <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-1/2">
                                  <label className="text-sm">Name</label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={editedUser.name}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                                <div className="flex flex-col w-1/2 ml-4">
                                  <label className="text-sm">Email</label>
                                  <input
                                    type="text"
                                    name="email"
                                    value={editedUser.email}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-col w-1/2 ml-4">
                                  <label className="text-sm">CNIC</label>
                                  <input
                                    type="text"
                                    name="nicNo"
                                    value={editedUser.nicNo}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                                <div className="flex flex-col w-1/2 ml-4">
                                  <label className="text-sm">Contact</label>
                                  <input
                                    type="text"
                                    name="phoneNumber"
                                    value={editedUser.phoneNumber}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-col w-1/2 ml-4 cursor-pointer">
                                  <label className="text-sm">Gender</label>
                                  <select
                                    name="gender"
                                    value={editedUser.gender}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  >
                                    <option disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div className="flex flex-col w-1/2 ml-4 cursor-pointer">
                                  <label className="text-sm">Vehicle</label>
                                  <select
                                    name="vehicleCategory"
                                    value={editedUser.vehicleCategory}
                                    onChange={handleChange}
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  >
                                    <option disabled>Select Vehicle</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                  </select>
                                </div>
                              </div>

                              <div className="flex justify-center mt-4">
                                <button
                                  onClick={updateUser}
                                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </li>
                    {/* Details Button */}
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
                                <img className="w-20 h-20 mx-auto rounded-full" src={data.profileImage} alt="Rounded avatar" />
                              </span>
                              <p><span className="font-semibold"> Role:</span> {data.role}</p>
                              <p><span className="font-semibold"> Gender:</span> {data.gender}</p>
                              <p><span className="font-semibold"> Name:</span> {data.name}</p>
                              <p><span className="font-semibold"> Email:</span> {data.email}</p>
                              <p><span className="font-semibold"> Contact:</span> {data.phoneNumber}</p>
                              <p><span className="font-semibold"> CNIC:</span> {data.nicNo}</p>
                              <p><span className="font-semibold"> Address:</span> {data.address}</p>
                              <p><span className="font-semibold"> Vehicle:</span> {data.vehicleCategory}</p>
                              <p><span className="font-semibold"> Vehicle No:</span> {data.vehicleNo}</p>
                              <p><span className="font-semibold"> Register Date:</span> {data.createdAt}</p>
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

export default UserList;
