import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductItem } from '../../redux/slices/productItemSlice';
import styles from './TreeList.module.css';

function TreeList() {
  const file = useSelector((store) => store.allProducts.data);
  const item = useSelector((store) => store.productItem.data);

  const dispatch = useDispatch();

  console.log(item);

  const changeProductItem = (objItem, objName, indexItem) => {
    dispatch(setProductItem(objItem));
  };

  return (
    <ul>
      {file ? file.map((obj, i) => (
        <li key={i} className={styles.treeObject}>
          <h3>{obj.name}</h3>
          <ul>
            {
              obj.list.map((objItem, j) => (
                <li key={j} className={styles.treeItem}>{objItem.nameItem}<button onClick={() => changeProductItem(objItem, obj.nmae, j)} type="button">click</button></li>
              ))
            }
          </ul>
        </li>
      )) : null }
    </ul>
  );
}

export default TreeList;
