import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  post: {}
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts]
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload.post._id)
      })
  }
});

export const getPosts = createAsyncThunk("post/getPosts", async (thunkAPI) => {
  try {
    return await postService.getPosts();
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const addPost = createAsyncThunk("post/addPost", async (post, thunkAPI) => {
  try {
    return await postService.addPost(post);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getById = createAsyncThunk("posts/getById", async (_id, thunkAPI) => {
  try {
    return await postService.getById(_id);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

// export const editPost = createAsyncThunk("post/editPost", async (post, thunkAPI) => {
//   try {
//     return await postService.editPost(post);
//   } catch (error) {
//     const message = error.response.data;
//     return thunkAPI.rejectWithValue(message);
//   }
// });

export const deletePost = createAsyncThunk("post/deletePost", async (_id, thunkAPI) => {
  try {
    return await postService.deletePost(_id);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export default postSlice.reducer;