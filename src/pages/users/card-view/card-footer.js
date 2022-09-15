import React from 'react';
import styles from './card-view.module.css';

const CardFooter = () => {
  return (
    <div className={styles['card-footer']}>
      <button className={styles['card-button']}>
        <i className='material-symbols-outlined'>edit</i>
      </button>
      <button className={styles['card-button']}>
        <i className='material-symbols-outlined'>delete</i>
      </button>
    </div>
  );
};

export default CardFooter;
