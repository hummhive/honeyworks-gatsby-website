import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const Key = styled.div`
  position: relative;
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms ease-in-out;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
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

  /* @media only screen and (max-width: 480px) {
    right: calc(50% - 22px);
  } */
`;
