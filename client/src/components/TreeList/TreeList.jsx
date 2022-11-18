/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductItem } from '../../redux/slices/productItemSlice';
import styles from './TreeList.module.css';

function TreeList() {
  const file = useSelector((store) => store.allProducts.data);

  const name = useSelector((store) => store.productItem.data.nameItem);

  const dispatch = useDispatch();

  const changeProductItem = (objItem, objName, nameI) => {
    dispatch(setProductItem({ objItem, objName, nameI }));
  };

  if (file.message === 'invalidMimetype') {
    return (
      <h3 style={{ textAlign: 'center' }}>Загрузите файл формата JSON</h3>
    );
  }
  return (
    <ul>
      {file ? file.map((obj, i) => (
        <li key={i} className={styles.treeObject}>
          <h3>{obj.name}</h3>
          <ul>
            {
              obj.list.map((objItem, j) => (
                <li
                  key={j}
                  className={styles.treeItem}
                  style={name === objItem.nameItem ? { textDecoration: 'underline' } : null}
                  onClick={() => changeProductItem(objItem, obj.name, objItem.nameItem)}
                >
                  {objItem.nameItem}
                </li>
              ))
            }
          </ul>
        </li>
      )) : null }
    </ul>
  );
}

export default memo(TreeList);
