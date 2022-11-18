/* eslint-disable array-callback-return */
import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/slices/allProductsSlice';
import styles from './Order.module.css';

function Order() {
  const item = useSelector((store) => store.productItem);
  const itemTest = useSelector((store) => store.allProducts.data);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    count: '',
    sort: '',
  });

  useEffect(() => {
    if (item.data.order) {
      setInput({
        count: item.data.order.count,
        sort: item.data.order.sort,
      });
    }
  }, [item]);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = () => {
    const arr = itemTest.map((obj) => {
      if (obj.name === item.objName) {
        return {
          ...obj,
          list: obj.list.map((objItem) => {
            if (objItem.nameItem === item.nameI) {
              return {
                ...objItem,
                order: {
                  ...input
                }
              };
            }
            return objItem;
          })
        };
      }
      return obj;
    });

    dispatch(setProducts(arr));
  };

  return (
    <div className={styles.container}>
      {item.data.order

        ? (
          <div className={styles.listContainer}>
            <ul style={{ marginBottom: '0px' }}>
              <li className={styles.list}>
                Количество продукта - <input onChange={changeHandler} name="count" value={input.count} />
              </li>
              <li className={styles.list}>
                Сорт продукта - <input onChange={changeHandler} name="sort" value={input.sort} />
              </li>
            </ul>
            <button className={styles.button} onClick={submitHandler} type="button">Изменить</button>
          </div>
        ) : null}
    </div>
  );
}

export default memo(Order);
