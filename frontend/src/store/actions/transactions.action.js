import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTransactions = createAsyncThunk(
  "transactions/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${obj.wallet}/full?limit=1`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);
