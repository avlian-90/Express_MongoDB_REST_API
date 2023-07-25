import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {
    email: "",
    password: ""
  },
};

export const loginAsync = createAsyncThunk(
  'login/loginUser',
  async (user) => {
    const response = await axios.post("api/users/login", user);
    localStorage.setItem("access-token", response.data.accessToken);
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
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

export const { setUserEmail, setUserPassword, resetForm } = loginSlice.actions;

export default loginSlice.reducer;
