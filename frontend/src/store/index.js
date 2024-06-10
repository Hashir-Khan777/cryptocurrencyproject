import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";
import transactionsReducer from "./reducers/transactions.reducer";

export default configureStore({
  reducer: combineReducers({
    categoryReducer,
    productReducer,
    transactionsReducer,
  }),
  devTools: false,
});
