import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (middles) => [...middles(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
