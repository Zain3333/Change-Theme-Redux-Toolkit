import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  active: true,
};

const changeThemeReducer = createSlice({
  name: "theme",
  initialState: INIT_STATE,
  reducers: {
    darkOn: (state = INIT_STATE) => {
      state.active = true;
    },
    darkOff: (state = INIT_STATE) => {
      state.active = false;
    },
  },
});

export const { darkOn, darkOff } = changeThemeReducer.actions;
export default changeThemeReducer.reducer;
