import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    language: languageReducer,
  },
});

export default store;
