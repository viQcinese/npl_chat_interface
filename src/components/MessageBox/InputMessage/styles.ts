import styled from 'styled-components';

export const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  border: 1px solid #ddd;
  border-left: none;
  border-radius: 16px;

  margin: 16px;

  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    height: 32px;
  }

  button {
    border-radius: 16px;
    background: #0070e8;
    color: #fff;
    font-size: 16px;
    padding: 8px;
  }
`;
