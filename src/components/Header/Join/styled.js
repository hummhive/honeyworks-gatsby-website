import styled from 'styled-components';

export const JoinContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.isShowing ? 3 : 0)};
`;

export const Inner = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 700px;
`;
