import styled from 'styled-components';

export const SigninContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: ${(props) => (props.isShowing ? 3 : 0)};
  overflow: auto;
`;

export const Inner = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;
