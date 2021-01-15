import React, { useCallback, useEffect, useRef, useState } from 'react';
import msgData from './msgData.json';

import InputMessage from './InputMessage';
import Message from './Message';

import { Container, Header, Display, Chat } from './styles';

interface IMessage {
  from: number;
  text: string;
}

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IMessageBoxProps {
  selectedFriend: IUser | undefined;
}

const MessageBox: React.FC<IMessageBoxProps> = ({ selectedFriend }) => {
  const [messagesArray, setMessagesArray] = useState<IMessage[]>(msgData);

  const displayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateScroll = useCallback(() => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    updateScroll();
  }, [inputRef, updateScroll]);

  return (
    <Container>
      {selectedFriend && <Header>{selectedFriend?.name}</Header>}

      {selectedFriend && (
        <>
          <Display ref={displayRef}>
            <Chat>
              {messagesArray.map((msg, index) => (
                <Message
                  key={`${msg.from}-${index}`}
                  from={msg.from}
                  text={msg.text}
                />
              ))}
            </Chat>
          </Display>
          <InputMessage
            setMessagesArray={setMessagesArray}
            updateScroll={updateScroll}
            inputRef={inputRef}
          />
        </>
      )}
    </Container>
  );
};

export default MessageBox;
