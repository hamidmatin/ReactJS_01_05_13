import React from 'react';
import styles from './card-view.module.css';

const CardFooter = ({ children }) => {
  return <div className={styles['card-footer']}>{children}</div>;
};

export default CardFooter;
