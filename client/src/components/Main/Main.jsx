import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputFile from '../InputFile/InputFile';
import TreeList from '../TreeList/TreeList';
import styles from './Main.module.css';

function Main() {
  return (
    <>
      <InputFile />
      <div className={styles.container}>
        <div className={styles.tree}>
          <TreeList />
        </div>
        <div className={styles.page} />
      </div>
    </>
  );
}

export default Main;
