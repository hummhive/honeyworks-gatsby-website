import styled from 'styled-components';

export const JoinContainer = styled.div`
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
`;

export const InviteTokenText = styled.div`
  text-align: center;
  border-radius: 8px;
  border: solid 1px white;
  background: rgba(0, 0, 0, 0.3);
  padding: 24px;
  font-weight: 600;
  margin: 0 16px 24px 16px;

  h4 {
    color: rgba(255, 255, 255, 0.4);
    margin: 0 16px 16px 16px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  p {
    margin: 0;
    letter-spacing: 0.1em;
  }
`;
