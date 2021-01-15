import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

export const List = styled.div`
  background: #fff;
  overflow-y: scroll;
`;
