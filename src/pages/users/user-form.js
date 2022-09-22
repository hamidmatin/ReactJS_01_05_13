import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './user-form.module.css';

export const UserForm = ({ data, onSave }) => {
  const nameRef = useRef();
    const navgate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setUser(data);
  }, [data]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSave(user);
  };

  const onCancelHandler = () => {
    navgate('/users')
  }
  const onNameChangeHandler = (e) => {
    /* راه ااشتباه */
    // const nameElement = document.getElementById('name')
    // console.log(nameElement)
    // console.log(nameElement.value)

    /* راه دوم */
    // console.log(nameRef.current)
    // console.log(nameRef.current.value)
    // setUser({...user ,name: nameRef.current.value})

    console.log(e.target.value);
    setUser({ ...user, name: e.target.value });
  };

  const onUserNameChangeHandler= (e)=> {
    setUser({ ...user, username: e.target.value });
  }
  const onChangeHandler = (e) => {
    // console.log(e.target)

    // switch (e.target.name) {
    //     case 'name':
    //         setUser({ ...user, name: e.target.value });
    //         break;
    //     case 'username':
    //         setUser({ ...user, username: e.target.value });
    //         break;
    //     default:
    //         break;
    // }
    
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <form className={styles['user-form']} onSubmit={onSubmitHandler}>
      <label className={styles['label-control']} htmlFor='name'>
        Name :
      </label>
      <input
        ref={nameRef}
        className={styles['input-control']}
        type='text'
        name='name'
        id='name'
        value={user.name}
        // onChange={onNameChangeHandler}
        onChange={onChangeHandler}
      />

      <label className={styles['label-control']} htmlFor='user-name'>
        User Name :
      </label>
      <input
        className={styles['input-control']}
        type='text'
        name='username'
        id='user-name'
        value={user.username}
        // onChange={onUserNameChangeHandler}
        onChange={onChangeHandler}
        />

      <label className={styles['label-control']} htmlFor='email'>
        E-Mail :
      </label>
      <input
        className={styles['input-control']}
        type='text'
        name='email'
        id='email'
        value={user.email}
        onChange={onChangeHandler}
        />

      <label className={styles['label-control']} htmlFor='phone'>
        Phone :
      </label>
      <input
        className={styles['input-control']}
        type='text'
        name='phone'
        id='phone'
        value={user.phone}
        onChange={onChangeHandler}
      />

      <div className={styles['form-footer']}>
        <button className={styles['save-btn']} type='submit'>
          Save
        </button>
        <button className={styles['cancel-btn']} type='button' onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};
