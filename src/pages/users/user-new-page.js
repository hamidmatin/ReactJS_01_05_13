import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { BasePage } from '../../components/base-page';
import { UserForm } from './user-form';
import { BASE_URL } from './users-constants';

const UserNewPage = () => {
  const navigate = useNavigate()

  const user = {
    name: '',
    username: '',
    email: '',
    phone: '021-',
  };
  const newUserHandler = (user) => {
    // console.log('new ', user);
    axios.post(`${BASE_URL}/users`, user)
    .then(result => {
      console.log(result)
      /**
       * navigate('path')
       * 
       * navigate(positive numbet) => navigate(2) => forward
       * navigate(nagative numbet) => navigate(-1) => backward
       */
      navigate('/users')
    })
  };
  return (
    <BasePage title={'New User'}>
      <UserForm data={user} onSave={newUserHandler} />
    </BasePage>
  );
};

export default UserNewPage;
