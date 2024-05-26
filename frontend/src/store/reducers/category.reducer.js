import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/category.action";

const initialState = {
  loading: false,
  categories: [],
};

export default createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;
