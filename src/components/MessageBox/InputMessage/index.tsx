/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useState } from 'react';
import { useAuth } from '../../../context/auth';

import { MessageForm } from './styles';

interface IInputMessage {
  setMessagesArray: React.Dispatch<React.SetStateAction<IMessage[]>>;
  updateScroll: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

interface IMessage {
  from: number;
  text: string;
}

const InputMessage: React.FC<IInputMessage> = ({
  setMessagesArray,
  updateScroll,
  inputRef,
}) => {
  const [message, setMessage] = useState('');
  const user = useAuth();

  const sendMessage = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (message === '') {
        return updateScroll();
      }

      const newMessage = { from: user.id, text: message };
      setMessagesArray(old => [...old, newMessage]);
      setMessage('');
      setTimeout(updateScroll, 1);
    },
    [message, setMessagesArray, updateScroll, user],
  );

  return (
    <MessageForm onSubmit={sendMessage}>
      <input
        ref={inputRef}
        value={message}
        onChange={e => setMessage(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Send</button>
    </MessageForm>
  );
};

export default InputMessage;
