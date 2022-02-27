import axios from "axios";

const API_URL = "http://localhost:4000";

const getPosts = async () => {
        const res = await axios.get(API_URL + "/posts?page=1");
        return res.data;
};

const postService = {
  getPosts,
};

export default postService;