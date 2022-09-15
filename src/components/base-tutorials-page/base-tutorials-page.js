import React from 'react';
import { Container } from '../framework';
import styles from './base-tutorials-page.module.css';

const BaseTutorialsPage = ({ title, containerFluid, children }) => {
  return (
    <Container fluid={containerFluid}>
      <h2 className={styles['title']}>
        <span>{title}</span>
      </h2>
      {children}
    </Container>
  );
};

export default BaseTutorialsPage;
