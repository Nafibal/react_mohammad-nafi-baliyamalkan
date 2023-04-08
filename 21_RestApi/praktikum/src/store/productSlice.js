import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "Buah Apel",
      productCategory: "Buah",
      productFreshness: "brand_new",
      productPrice: 5,
      image: "Doe",
      additionalDescription: "Ini adalah buah apel",
    },
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc84898836",
      productName: "Sayur Kangkung",
      productCategory: "Sayur",
      productFreshness: "second_hank",
      productPrice: 10,
      image: "Doe",
      additionalDescription: "ini adalah sayur kangkung",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    EditProduct: (state, action) => {
      console.log(action.payload);
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products.push(action.payload);
    },
  },
});

export default productSlice.reducer;
export const { addProduct, deleteProduct, EditProduct } = productSlice.actions;
