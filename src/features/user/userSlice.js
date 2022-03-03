import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  userNow: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.userNow = action.payload;
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

export default userSlice.reducer;