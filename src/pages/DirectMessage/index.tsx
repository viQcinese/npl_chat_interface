import React from 'react';
import { useLocation } from 'react-router-dom';

import FriendsList from '../../components/FriendsList';
import MessageBox from '../../components/MessageBox';
import { useAuth } from '../../context/auth';

import { ChatContainer } from './styles';

const DirectMessage: React.FC = () => {
  const user = useAuth();
  const path = useLocation().pathname.substring(1);

  const selectedFriend = user.friends.find(
    friend => friend.id === Number(path),
  );

  return (
    <ChatContainer>
      <FriendsList selectedFriend={selectedFriend}>FriendsList</FriendsList>
      <MessageBox selectedFriend={selectedFriend}>MessageBox</MessageBox>
    </ChatContainer>
  );
};

export default DirectMessage;
