import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IListItemProps {
  userName: string;
  userAvatar: string;
  userId: number;
  selected: boolean;
}

const ListItem: React.FC<IListItemProps> = ({
  userName,
  userAvatar,
  userId,
  selected,
}) => {
  return (
    <Link to={`/${userId}`}>
      <Container selected={selected}>
        <img src={userAvatar} alt={`${userName} avatar`} />
        <span>{userName}</span>
      </Container>
    </Link>
  );
};

export default ListItem;
