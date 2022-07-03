import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/Authentication/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
