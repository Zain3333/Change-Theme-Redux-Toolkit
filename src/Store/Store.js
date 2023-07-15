import { configureStore } from "@reduxjs/toolkit";
import changeThemeReducer from "./changeThemeReducer";

export const store = configureStore({
  reducer: {
    theme: changeThemeReducer,
  },
});
