import axios from "axios";

const API_URL = "http://localhost:4000";

const getInfoUser = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios(API_URL + "/users/infoFollowers", {
            headers: {
              authorization: user?.token
            },
          });
        return res.data;
};

const userService = {
  getInfoUser

};

export default userService;