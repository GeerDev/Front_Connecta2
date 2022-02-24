import axios from "axios";

const API_URL = "http://localhost:4000";

const register = async (userData) => {
    try {
        console.log("1:", userData);
        const res = await axios.post(API_URL + "/users", userData);
        console.log("2:", res.data);
        return res.data;
    } catch (error) {
        console.error(error)
    }
};

const login = async(userData)=>{
    const res = await axios.post(API_URL + '/users/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    return res.data
}

const authService = {
  register,
  login
};

export default authService;