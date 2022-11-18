/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const allProductsSlice = createSlice({
  name: 'products',
  initialState: {
    data: []
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    }
  }
});

export default allProductsSlice.reducer;
export const { setProducts } = allProductsSlice.actions;
