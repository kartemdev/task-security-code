/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { editAllProducts } from './allProductsSlice';

const productItemSlice = createSlice({
  name: 'productItem',
  initialState: {
    data: {},
    objName: null,
    nameI: null,
  },
  reducers: {
    setProductItem(state, action) {
      state.data = action.payload.objItem;
      state.objName = action.payload.objName;
      state.nameI = action.payload.nameI;
    },
  }
});

export default productItemSlice.reducer;
export const { setProductItem } = productItemSlice.actions;
