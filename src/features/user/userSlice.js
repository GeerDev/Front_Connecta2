import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  userNow: {},
  userSearch: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      resetUser: (state) => {
        state.userNow = {};
      },
      resetSearch: (state) => {
        state.userSearch = [];
      }  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.userNow = action.payload;
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.userSearch = action.payload;
      })
  }
});

export const getInfoUser = createAsyncThunk("user/getInfoUser", async (thunkAPI) => {
  try {
    return await userService.getInfoUser();
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const searchByName = createAsyncThunk("user/searchByName", async (name, thunkAPI) => {
  try {
    return await userService.searchByName(name);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const { resetUser, resetSearch } = userSlice.actions;
export default userSlice.reducer;