import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  createProduct,
  addProductImage,
  getProduct,
} from "../actions/product.action";

const initialState = {
  loading: false,
  products: [],
  product: {},
  image: null,
};

export default createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.products.push(payload);
      state.loading = false;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addProductImage.fulfilled, (state, { payload }) => {
      state.image = payload.image;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;
