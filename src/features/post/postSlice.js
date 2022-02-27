import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: []
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

export default postSlice.reducer;