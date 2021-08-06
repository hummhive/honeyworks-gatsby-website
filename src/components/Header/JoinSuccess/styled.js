import styled from 'styled-components';

export const JoinSuccessContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: calc(100vh - ${(props) => props.baseComponentHeight}px - 32px);
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

  h2 {
    font-size: 28px;
    margin-bottom: 32px;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  > p {
    font-size: 17px;
    margin-bottom: 32px;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
