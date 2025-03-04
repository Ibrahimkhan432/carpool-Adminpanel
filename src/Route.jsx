import React, { useContext } from 'react'
import Dashboard from "./AdminDashboard/Dashboard";
import UserList from "./AdminDashboard/UserList";
import ActiveDriver from "./AdminDashboard/ActiveDriver";
import DriverList from "./AdminDashboard/Driver/DriverList.jsx";
import { Route, Routes } from 'react-router-dom'
import App from './App.jsx';
import MaleDrivers from './AdminDashboard/Driver/MaleDrivers.jsx';
import SideBar from './AdminDashboard/SideBar.jsx';
import FemaleDrivers from './AdminDashboard/Driver/FemaleDrivers.jsx';
import { AuthContext } from './context/AuthContext.jsx';

const Router = () => {
  const {currentUser}=useContext(AuthContext)
  return (
        <>
      <Routes>
        <Route index element={<App/>} />
        <Route element={<SideBar/>}>
        <Route path="/dashboard" element={<Dashboard/>  }/>
        <Route path="/userlist" element={<UserList />} />
        <Route path="/activedriver" element={<ActiveDriver />} />
        <Route path="/driverlist" element={<DriverList />} />
        <Route path="/maledrivers" element={<MaleDrivers  />} />
        <Route path="/femaledrivers" element={<FemaleDrivers/>} />
        </Route>
      </Routes>
      </>
  )
}

export default Router