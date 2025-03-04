const devURL = "http://localhost:4000";
const prodURL = "https://carpool-backend-staging.up.railway.app";

// export const BASE_URL = prodURL;
export const BASE_URL = devURL;

 
export const AppRoutes = {
  signupUser: BASE_URL + "/user/signupUser",
  signupRider: BASE_URL+"/user/signupRider",
  login: BASE_URL + "/user/login",
  getAllUser: BASE_URL + "/user/allUsers",
  getCurrentUser: BASE_URL + "/user/currentUser",
  deleteUser: BASE_URL + "/user",
  searchUserByCnic: BASE_URL + "/user/searchByCnic",
  editUser: BASE_URL + "/user",
};
