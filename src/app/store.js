import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/Authentication/userSlice";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer
  },
});
