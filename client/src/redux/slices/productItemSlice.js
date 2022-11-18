/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productItemSlice = createSlice({
  name: 'productItem',
  initialState: {
    data: {},
    objName: null,
    indexItem: null,
  },
  reducers: {
    setProductItem(state, action) {
      state.data = action.payload.objItem;
      state.objName = action.payload.objName;
      state.indexItem = action.payload.indexItem;
    }
  }
});

export default productItemSlice.reducer;
export const { setProductItem } = productItemSlice.actions;
