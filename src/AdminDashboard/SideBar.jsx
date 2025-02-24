import React from "react";
import { Outlet, useNavigate } from "react-router";
import { FaCar, FaRegUser } from 'react-icons/fa';
import Navbar from "./Navbar.jsx"
import { MdOutlineDashboardCustomize } from 'react-icons/md';

function SideBar() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="m-5 mt-0 h-150 flex flex-col md:flex-row  gap-2">
      <div className="bg-white w-full md:w-1/6 border-2 border-green-600 rounded-xl">
          <ul className='text-center space-y-5  p-4 font-semibold'>
          <li className='flex justify-center items-center gap-2'>
            <MdOutlineDashboardCustomize className='w-6'/>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
              >
              Dashboard
            </button>
          </li>
          <li className='flex justify-center items-center gap-2'>
          <FaRegUser className='w-6'/>
            <button
              onClick={() => navigate('/userlist')}
              className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
            >
              Users
            </button>
            </li>
            <li className='flex justify-center items-center gap-2'>
          <FaCar className="w-6"/>
            <button
              onClick={() => navigate('/driver')}
              className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
            >
              Active Drive
            </button>
          </li>
          <li className='flex justify-center items-center gap-2'>
          <FaCar className="w-6"/>
            <button
              onClick={() => navigate('/driverlist')}
              className="w-full text-left p-2 rounded-md  cursor-pointer hover:text-white hover:bg-green-600 focus:bg-green-600 focus:text-white"
            >
              Driver List
            </button>
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