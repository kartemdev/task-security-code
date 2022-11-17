import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.tree} />
      <div className={styles.page} />
    </div>
  );
}

export default Main;
