import React from 'react';
import { useState } from 'react';
import { BasePage } from '../../components/base-page';
import UsersCardView from './users-card-view';
import UsersGridView from './users-grid-view';
import { CARD_VIEW, GRID_VIEW } from './users-constants';
import axios from 'axios';
import { useEffect } from 'react';
import Loading from '../../components/loading/loading';

const UsersPage = () => {
  const [viewMode, setViewMode] = useState(CARD_VIEW);
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      console.log(result.data);
      setUserList(result.data);
      setIsLoading(false)
    });
  }, []);

  return (
    <BasePage title={'Users'}>
      {isLoading && <Loading />}
      {viewMode === GRID_VIEW ? (
        <UsersGridView />
      ) : viewMode === CARD_VIEW ? (
        <UsersCardView userList={userList} />
      ) : (
        <p>View Mode is not correct</p>
      )}
    </BasePage>
  );
};

export default UsersPage;
