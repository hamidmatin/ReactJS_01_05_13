import React from 'react';
import styles from './card-view.module.css'

const CardData = ({ label, value }) => {
  return (
    <div className={styles['card-data']}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
};

export default CardData;
