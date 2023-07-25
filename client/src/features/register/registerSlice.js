import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {
    username: "",
    email: "",
    password: ""
  },
};

export const registerAsync = createAsyncThunk(
  'register/registerUser',
  async (user) => {
    await axios.post("api/users/register", user);
  }
);

export const registerSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.user.username = action.payload;
  },
    setUserEmail: (state, action) => {
        state.user.email = action.payload;
    },
    setUserPassword: (state, action) => {
        state.user.password = action.payload;
    },
    resetForm: (state) => {
      state.user.email = "";
      state.user.password = "";
  }
  },
});

export const { setUserName, setUserEmail, setUserPassword, resetForm } = registerSlice.actions;

export default registerSlice.reducer;
