import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Delivery.module.css';

function Delivery() {
  const item = useSelector((store) => store.productItem.data.delivery);

  console.log(item);

  return (
    <div className={styles.container}>
      {item
        ? (
          <ul>
            <li className={styles.list}>Адресс доставки - {item.adress}</li>
            <li className={styles.list}>Дата доставки - {item.date}</li>
            <li className={styles.list}>Время доставки - {item.time}</li>
          </ul>
        ) : null}
    </div>
  );
}

export default Delivery;
