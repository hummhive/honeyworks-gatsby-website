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
  max-width: 700px;
  margin: auto;

  h2 {
    font-size: 28px;
    margin-bottom: 32px;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 32px;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 48px 0;
  position: relative;

  p {
    margin-bottom: 0;
    font-size: 14px;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const KeyContainer = styled.div`
  border: solid 2px white;
  border-radius: 8px;
  padding: 16px;
  flex: 1;
  margin-right: 16px;
  max-width: 100%;
  overflow-x: scroll;

  @media only screen and (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const CopiedText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: -32px;
  right: 0;
  transition: all 300ms ease-in-out;
  transform: ${(props) =>
    props.isShowing ? 'translateY(0)' : 'translateY(-25px)'};
  opacity: ${(props) => (props.isShowing ? 1 : 0)};

  @media only screen and (max-width: 480px) {
    right: calc(50% - 22px);
  }
`;
