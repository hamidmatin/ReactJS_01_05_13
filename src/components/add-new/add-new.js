import React from 'react';
import { Link } from 'react-router-dom';
import styles from './add-new.module.css';

const AddNew = ({ to = 'new' }) => {
  return (
    <div className={styles['add-new']}>
      <Link to={to}>
        <i className='material-symbols-outlined'>add</i>
      </Link>
    </div>
  );
};

export default AddNew;
