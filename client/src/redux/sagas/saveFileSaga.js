import axios from 'axios';
import { call, put, debounce } from 'redux-saga/effects';
import { setMessageSave } from '../slices/allProductsSlice';

async function saveFileFetch(products) {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/save',
    data: {
      json: products
    }
  });

  return response.data;
}

function* getResultSave(action) {
  try {
    const message = yield call(saveFileFetch, action.payload);
    console.log(message);
  } catch (error) {
    console.log('saga error order --->', error);
  }
}

function* saveFileSaga() {
  yield debounce(100, 'SAVE_FILE', getResultSave);
}

export default saveFileSaga;
