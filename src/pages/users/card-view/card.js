import React from 'react';
import { Link } from 'react-router-dom';
import CardData from './card-data';
import CardFooter from './card-footer';
import CardTitle from './card-title';
import styles from './card-view.module.css';

const Card = ({ user, onDelete }) => {
  const onDeleteHandler = ()=> {
    onDelete(user.id)
  }
  return (
    <div className={styles['card']}>
      <CardTitle value={user.name} />
      <CardData label={'User Name :'} value={user.username} />
      <CardData label={'E-Mail :'} value={user.email} />
      <CardData label={'Phone :'} value={user.phone} />
      <CardFooter>
        <Link to={'edit/' + user.id} className={styles['card-button']}>
          <i className='material-symbols-outlined'>edit</i>
        </Link>
        <button className={styles['card-button']} onClick={onDeleteHandler}>
          <i className='material-symbols-outlined'>delete</i>
        </button>
      </CardFooter>
    </div>
  );
};

export default Card;
