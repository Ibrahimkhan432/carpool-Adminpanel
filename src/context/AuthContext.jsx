import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { AppRoutes } from "../constant/Constant";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [AllUsers, setAllUsers] = useState([]);
  const [AllDrivers, setAllDrivers] = useState([])
  const [AllMaleDrivers, setAllMaleDrivers] = useState([])
  const [AllFemaleDrivers, setAllFemaleDrivers] = useState([])

    useEffect(() => {
    const fetchAllDrivers = async () => {
      try {
        const res = await axios.get(AppRoutes.getAllUser);
        setAllUsers(res.data.data);
        const driverData = res.data.data.filter((user) => user.role === "driver");
        setAllDrivers(driverData);
        setAllMaleDrivers( driverData.filter((data) => data.gender === "Male"))
        setAllFemaleDrivers(driverData.filter((data) => data.gender === "Female"));
        console.log(driverData);
        console.log(AllMaleDrivers)
        console.log(AllFemaleDrivers)
      } catch (error) {
        console.log("Error fetching users:", error.message);
      }
    };
  
    fetchAllDrivers();
  }, []);
  return (
    <AuthContext.Provider value={{AllUsers,setAllUsers ,AllDrivers, setAllDrivers, AllMaleDrivers, setAllMaleDrivers, AllFemaleDrivers, setAllFemaleDrivers}}>
      {children}
      {console.log(AllUsers)
      }
    </AuthContext.Provider>

  );
}
export default AuthContextProvider;