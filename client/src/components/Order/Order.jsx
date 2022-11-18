import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Order.module.css';

function Order() {
  const item = useSelector((store) => store.productItem.data.order);

  const [input, setInput] = useState({
    count: '',
    sort: '',
  });

  useEffect(() => {
    if (item) {
      setInput({
        count: item.count,
        sort: item.sort,
      });
    }
  }, [item]);

  const chengeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.container}>
      {item

        ? (
          <ul>
            <li className={styles.list}>
              Количество продукта - <input onChange={chengeHandler} name="count" value={input.count} />
            </li>
            <li className={styles.list}>
              Сорт продукта - <input onChange={chengeHandler} name="sort" value={input.sort} />
            </li>
          </ul>
        ) : null}
    </div>
  );
}

export default memo(Order);
