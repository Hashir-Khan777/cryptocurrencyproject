import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://ec2-3-129-128-146.us-east-2.compute.amazonaws.com/api/categories`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);
