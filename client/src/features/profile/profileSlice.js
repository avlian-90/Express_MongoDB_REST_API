import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  user: ""
};

export const profileAsync = createAsyncThunk(
  'user/getUser',
  async () => {
    const token = localStorage.getItem("access-token");
    const response = await axios.get("api/users/current", { 
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    });
    return response.data.username;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default profileSlice.reducer;