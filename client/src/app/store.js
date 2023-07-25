import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import registerReducer from '../features/register/registerSlice';
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    profile: profileReducer,
  },
});
