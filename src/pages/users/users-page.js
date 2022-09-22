import React from 'react';
import { useState } from 'react';
import { BasePage } from '../../components/base-page';
import UsersCardView from './users-card-view';
import UsersGridView from './users-grid-view';
import { BASE_URL, CARD_VIEW, GRID_VIEW } from './users-constants';
import axios from 'axios';
import { useEffect } from 'react';
import Loading from '../../components/loading/loading';
import { AddNew } from '../../components/add-new';

const UsersPage = () => {
  const [viewMode, setViewMode] = useState(CARD_VIEW);
  const [isLoading, setIsLoading] = useState(true);
  const [deleting, setDeleting] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (deleting) {
      axios.get(`${BASE_URL}/users`).then((result) => {
        console.log(result.data);
        setUserList(result.data);
        setIsLoading(false);
        setDeleting(false);
      });
    }
  }, [deleting]);

  const deleteUserHandler = (id) => {
    // console.log('delete user', id);
    // const filtredList = userList.filter((user) => user.id !== id);
    // console.log(filtredList);
    // setUserList(filtredList);

    /**
     * Get confirm then delete
     */
    setIsLoading(true);
    // setUserList(userList.filter((user) => user.id !== id))

    axios.delete(`${BASE_URL}/users/${id}`).then((result) => {
      console.log(result);
      setDeleting(true);
      setIsLoading(false);
    });
  };
  return (
    <BasePage title={'Users'}>
      {isLoading && <Loading />}
      <AddNew />
      {viewMode === GRID_VIEW ? (
        <UsersGridView />
      ) : viewMode === CARD_VIEW ? (
        <UsersCardView userList={userList} onDeleteUser={deleteUserHandler} />
      ) : (
        <p>View Mode is not correct</p>
      )}
    </BasePage>
  );
};

export default UsersPage;
