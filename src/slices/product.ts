import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  getProduct,
  removeProduct,
  updateProduct,
} from "../actions/product";
const initialState = {
  products: [],
  isLoading: false,
  err: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    });
    //add
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    });
    // delete
    builder.addCase(removeProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
    });
    builder.addCase(removeProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    });
    // update
    builder.addCase(updateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      const newProduct = action.payload;
      state.products = state.products.map((item: any) =>
        item.id == newProduct.id ? newProduct : item
      );
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    });
  },
});
export const productReducer = productSlice.reducer;
