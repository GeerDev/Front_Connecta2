import axios from "axios";

const API_URL = "http://localhost:4000";

const getPosts = async () => {
        const res = await axios.get(API_URL + "/posts?page=1");
        return res.data.posts;
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + `/posts/id/${_id}`);
  return res.data;
};

const addPost = async (post) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts", post, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const deletePost = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + `/posts/${_id}`,{
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const postService = {
  getPosts,
  getById,
  addPost,
  deletePost
};

export default postService;