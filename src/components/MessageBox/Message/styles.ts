import styled from 'styled-components';

interface ILineBlock {
  isIncoming: boolean;
}

export const LineBlock = styled.div<ILineBlock>`
  display: flex;
  justify-content: ${props => (props.isIncoming ? 'flex-start' : 'flex-end')};
  margin-bottom: 8px;
`;

interface IBubbleProps {
  isIncoming: boolean;
}

export const Bubble = styled.div<IBubbleProps>`
  display: flex;
  justify-content: center;
  padding: 8px 16px;

  background: ${props => (props.isIncoming ? '#fff' : '#eee')};
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 16px;

  max-width: 50%;

  span {
    font-size: 14px;
    word-break: break-word;
  }
`;
