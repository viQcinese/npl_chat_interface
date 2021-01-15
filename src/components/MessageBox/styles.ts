import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 4px;

  width: calc(100vw - 200px);
  max-width: 600px;
  min-width: 240px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: scroll;

  flex: 1;
`;

export const Chat = styled.div`
  flex: 1;
`;
