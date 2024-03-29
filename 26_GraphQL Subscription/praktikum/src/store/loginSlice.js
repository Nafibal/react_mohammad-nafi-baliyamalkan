import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default loginSlice.reducer;
export const { loginUser, logoutUser } = loginSlice.actions;
