import React from 'react';
import Card from './card-view/card';
import CardWrapper from './card-view/card-wrapper';
import EmptyList from './card-view/empty-list';

const UsersCardView = ({ userList, onDeleteUser }) => {
  return userList && userList.length > 0 ? (
    <CardWrapper>
      {userList.map((user) => (
        <Card key={user.id} user={user} onDelete={onDeleteUser} />
      ))}
    </CardWrapper>
  ) : (
    <EmptyList message={'There is no data to shown'} />
  );
};

export default UsersCardView;
