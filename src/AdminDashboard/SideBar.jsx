import React from "react";
import { Outlet, useNavigate } from "react-router";
import { FaCar, FaRegUser, FaUsers } from 'react-icons/fa';
import Navbar from "./Navbar.jsx"
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { IoIosMan} from "react-icons/io";
import { SlUserFemale } from "react-icons/sl";
import { FcBusinesswoman, FcManager } from "react-icons/fc";


function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container m-5 mt-0 h-150 flex flex-col md:flex-row  gap-2">
        <div className="bg-white w-full md:w-1/6 border-2 border-green-600 rounded-md bg-gradient-to-b from-green-400 to-green-200 ">
          <ul className='text-center space-y-5  p-4 font-semibold'>
            <li className='flex justify-center items-center gap-2'>
              <MdOutlineDashboardCustomize className='w-6' />
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Dashboard
              </button>
            </li>
            <li className='flex justify-center items-center gap-2 '>
              <FaUsers
              className='w-6 text-blue-600' />
              <button
                onClick={() => navigate('/userlist')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Users
              </button>
            </li>
            <li className='flex justify-center items-center gap-2'>
              <FaCar className="w-6 text-green-600" />
              <button
                onClick={() => navigate('/activedriver')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Active Drive
              </button>
            </li>
           
            <li className='flex justify-center items-center gap-2'>
              <FaCar className="w-6  text-green-600" />
              <button
                onClick={() => navigate('/driverlist')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Driver List
              </button>
            </li>
            <li className='flex justify-center items-center gap-2'>
              <FcManager

              className="w-8 h-8" />
              <button
                onClick={() => navigate('/maledrivers')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Male Drivers              </button>
            </li>
            <li className='flex justify-center items-center gap-2'>
            <FcBusinesswoman
              className="w-8 h-8" />
              <button
                onClick={() => navigate('/femaledrivers')}
                className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
                Female Drivers              </button>
            </li>
          </ul>


        </div>


        <div className="flex flex-col flex-end w-full md:w-5/6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SideBar;