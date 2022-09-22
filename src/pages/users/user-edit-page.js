import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BasePage } from '../../components/base-page';
import { UserForm } from './user-form';
import { BASE_URL } from './users-constants';

const UserEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [findedUser, setFindedUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    axios(`${BASE_URL}/users/${id}`).then((result) => {
      setFindedUser(result.data);
    });
  }, [id]);

  const updateUserHandler = (user) => {
    // console.log('update', user);
    axios.put(`${BASE_URL}/users/${id}`, user).then((res) => {
      navigate(-1);
    });
  };
  return (
    <BasePage title={'Edit User'}>
      <UserForm data={findedUser} onSave={updateUserHandler} />
    </BasePage>
  );
};

export default UserEditPage;
