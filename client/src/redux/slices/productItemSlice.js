/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productItemSlice = createSlice({
  name: 'productItem',
  initialState: {
    data: {}
  },
  reducers: {
    setProductItem(state, action) {
      state.data = action.payload;
    }
  }
});

export default productItemSlice.reducer;
export const { setProductItem } = productItemSlice.actions;
