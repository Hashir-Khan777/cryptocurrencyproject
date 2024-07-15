import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://18.224.246.176/api/categories`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);
