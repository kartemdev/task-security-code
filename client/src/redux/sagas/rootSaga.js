import { all } from 'redux-saga/effects';
import saveFileSaga from './saveFileSaga';

export default function* rootSaga() {
  yield all([
    saveFileSaga(),
  ]);
}
