import propTypes from 'prop-types';
import { Layout } from "Accesorries/Profile/ProfileStyled";
import { FriendListItem } from '../FriendsListItem/FriendsListItem';


import { List } from './FriendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <Layout>
      <List className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
      </List>
    </Layout>
  );
};

FriendList.propTypes = {
friends: propTypes.array.isRequired,
};
