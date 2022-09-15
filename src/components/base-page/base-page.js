import React from 'react';
import { Container } from '../framework';
import styles from './base-page.module.css';

const BasePage = ({ title, containerFluid, children }) => {
  return (
    <Container fluid={containerFluid}>
      <h1 className={styles['title']}>
        <span>{title}</span>
      </h1>
      {children}
    </Container>
  );
};

export default BasePage;
