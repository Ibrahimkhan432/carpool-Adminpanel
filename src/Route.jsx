import React from 'react'
import Dashboard from "./AdminDashboard/Dashboard";
import UserList from "./AdminDashboard/UserList";
import ActiveDriver from "./AdminDashboard/ActiveDriver";
import DriverList from "./AdminDashboard/Driver/DriverList.jsx";
import { Route, Routes } from 'react-router-dom'
import App from './App.jsx';
import MaleDrivers from './AdminDashboard/Driver/MaleDrivers.jsx';
import SideBar from './AdminDashboard/SideBar.jsx';
import FemaleDrivers from './AdminDashboard/Driver/FemaleDrivers.jsx';

const Router = () => {
  return (
        <>
      <Routes>
        <Route index element={<App/>} />
        <Route element={<SideBar/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/driver" element={<ActiveDriver />} />
        <Route path="/driverlist" element={<DriverList />} />
        <Route path="/maledrivers" element={<MaleDrivers  />} />
        <Route path="/femaledrivers" element={<FemaleDrivers/>} />
        </Route>
      </Routes>
      </>
  )
}

export default Router