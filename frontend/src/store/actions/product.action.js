import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/products`);
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
        `http://localhost:5000/api/products/${obj.id}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const getProductsByWalletId = createAsyncThunk(
  "products/get/wallet/id",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/wallet/${obj.walletId}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const getFundedProducts = createAsyncThunk(
  "products/funded",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/funded/${obj.walletId}`
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
        `http://localhost:5000/api/products`,
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
        `http://localhost:5000/api/products/image`,
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
        `http://localhost:5000/api/products/${obj.id}/${obj.walletId}`,
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

export const addUpdate = createAsyncThunk(
  "products/update",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/products/update`,
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

export const getUpdates = createAsyncThunk(
  "products/updates/get",
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/updates/${obj.id}`,
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
