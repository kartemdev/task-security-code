import Axios from 'axios';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/slices/allProductsSlice';

function InputFile() {
  const dispatch = useDispatch();

  const handlerChange = async (e) => {
    try {
      const data = new FormData();
      data.append('JSONFILE', e.target.files[0]);

      await Axios.post('http://localhost:3001/upload', data)
        .then((res) => dispatch(setProducts(res.data)));
    } catch (error) {
      console.log('error axios res --->', error);
    }
  };

  return (
    <input onChange={handlerChange} type="file" />
  );
}

export default memo(InputFile);
