import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import allProductsSlice from './slices/allProductsSlice';
import productItemSlice from './slices/productItemSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  allProducts: allProductsSlice,
  productItem: productItemSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (middles) => [...middles(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
