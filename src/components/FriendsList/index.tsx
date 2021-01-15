import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import ListItem from './ListItem';

import { Container, Header, List } from './styles';

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IFriendsListProps {
  selectedFriend: IUser | undefined;
}

const FriendsList: React.FC<IFriendsListProps> = ({ selectedFriend }) => {
  const user = useAuth();

  return (
    <Container>
      <Link to="/">
        <Header>{user.name}</Header>
      </Link>
      <List>
        {user.friends.map(friend => (
          <ListItem
            key={friend.id}
            userAvatar={friend.avatar}
            userName={friend.name}
            userId={friend.id}
            selected={friend.id === selectedFriend?.id}
          />
        ))}
      </List>
    </Container>
  );
};

export default FriendsList;
