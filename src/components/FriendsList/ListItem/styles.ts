import styled from 'styled-components';

interface IContainerProps {
  selected: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: ${props => (props.selected ? 'default' : 'pointer')};

  background: ${props => (props.selected ? '#eee' : '#fff')};

  &:hover {
    background: ${props => (props.selected ? '#eee' : '#fafafa')};
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
  }
`;
