import styled from 'styled-components';

export const JoinSuccessContainer = styled.div`
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

  p {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 48px 0;
`;

export const KeyContainer = styled.div`
  border: solid 2px white;
  border-radius: 8px;
  padding: 16px;
  flex: 1;
  margin-right: 16px;
  max-width: 100%;
  overflow: auto;
`;
