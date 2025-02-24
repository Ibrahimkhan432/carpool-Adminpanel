import React, { useContext, useEffect } from 'react'
import AuthContext from "../context/AuthContext.jsx"
import { useNavigate } from 'react-router-dom';

function RoleBasedNav() {
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);
    const navigate = useNavigate()
    
    // useEffect(()=>{
    //     switch (currentUser.role) {
    //         case "admin":
    //             navigate("/dashboard")
    //             break;
        
    //         default:
    //             navigate("/")
    //             break;
    //     }
        // if(!currentUser || !currentUser.role){
        //     return navigate("/")
        // }
        // if(!currentUser.role == "admin"){
        //     return navigate("/")
        // }
    // },[])
    
  return (
    <div>

    </div>
  )
}


export default RoleBasedNav