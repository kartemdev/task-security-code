/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Delivery from '../Delivery/Delivery';
import InputFile from '../InputFile/InputFile';
import Order from '../Order/Order';
import TreeList from '../TreeList/TreeList';
import styles from './Main.module.css';

function Main() {
  const file = useSelector((store) => store.allProducts);

  const dispatch = useDispatch();

  const [statePage, setStatePage] = useState(true);

  const pageOrderHandler = () => {
    setStatePage(true);
  };

  const pageDeliveryHandler = () => {
    setStatePage(false);
  };

  const saveHandler = () => {
    dispatch({ type: 'SAVE_FILE', payload: file.data });
  };

  return (
    <>
      <div className={styles.containerInput}>
        <InputFile />
        <button onClick={saveHandler} type="button">Сохранить</button>
      </div>
      <div className={styles.container}>
        <div className={styles.tree}>
          <TreeList />
        </div>
        <div className={styles.page}>
          <div className={styles.pageNameDiv}>
            <h3
              onClick={pageOrderHandler}
              className={styles.pageName}
              style={statePage ? { textDecoration: 'underline' } : null}
            >Условия Заказа
            </h3>
            <h3
              onClick={pageDeliveryHandler}
              className={styles.pageName}
              style={statePage ? null : { textDecoration: 'underline' }}
            >Условия Доставки
            </h3>
          </div>
          <div>
            {statePage ? <Order /> : <Delivery />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
