import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import languageReducer from "./languageSlice";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    language: languageReducer,
    users: userReducer,
    login: loginReducer,
  },
});

export default store;
