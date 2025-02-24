import axios, { Axios } from "axios";
import { createContext, useEffect, useState } from "react";
import { AppRoutes } from "../constant/Constant";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(Cookies.get("token") || null )
  const [currentUser, setCurrentUser] = useState(null)
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
        
      } catch (error) {
        console.log("Error fetching users:", error.message);
      }
    };
  
    fetchAllDrivers();
  }, []);


    useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(AppRoutes.getCurrentUser , {
          headers:{Authorization :`Bearer ${token}`},
        });
          setCurrentUser(res.data.data)
        } catch (error) {
          console.log("Error fetching user:", error.message);
        }
      };
      checkAdmin();
    }, []);
  return (
    <AuthContext.Provider value={{AllUsers,setAllUsers ,AllDrivers, setAllDrivers, AllMaleDrivers, setAllMaleDrivers, AllFemaleDrivers, setAllFemaleDrivers, currentUser}}>
      {children}
    </AuthContext.Provider>

  );
}
export default AuthContextProvider;