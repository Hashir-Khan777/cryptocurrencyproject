import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "../actions/transactions.action";

const initialState = {
  loading: false,
  transactions: {},
};

export default createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.transactions = payload;
      state.loading = false;
    });
    builder.addCase(getTransactions.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;
