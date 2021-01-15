import React from 'react';
import { useAuth } from '../../../context/auth';

import { LineBlock, Bubble } from './styles';

interface IMessageProps {
  text: string;
  from: number;
}

const Message: React.FC<IMessageProps> = ({ from, text }) => {
  const user = useAuth();

  return (
    <LineBlock isIncoming={user.id !== from}>
      <Bubble isIncoming={user.id !== from}>
        <span>{text}</span>
      </Bubble>
    </LineBlock>
  );
};

export default Message;
