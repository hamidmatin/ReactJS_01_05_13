import React from 'react';
import styles from './container.module.css';

const Container = ({ fluid, children }) => {
  return <div className={fluid ? styles['container-fluid'] : styles['container']}>{children}</div>;
};

export default Container;
