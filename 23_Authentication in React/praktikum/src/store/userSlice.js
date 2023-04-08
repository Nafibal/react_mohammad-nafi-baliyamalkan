import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      username: "admin",
      password: "123",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
