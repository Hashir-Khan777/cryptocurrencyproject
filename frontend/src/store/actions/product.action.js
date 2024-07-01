import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://ionbackend.onrender.com/api/products`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/get/id",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://ionbackend.onrender.com/api/products/${obj.id}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://ionbackend.onrender.com/api/products`,
        obj
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const addProductImage = createAsyncThunk(
  "products/add/image",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://ionbackend.onrender.com/api/products/image`,
        obj
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const fundProduct = createAsyncThunk(
  "products/fund",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `https://ionbackend.onrender.com/api/products/${obj.id}`,
        obj
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);
