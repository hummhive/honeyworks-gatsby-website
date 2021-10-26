import styled from 'styled-components';

export const AccountContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: calc(100vh - ${(props) => props.baseComponentHeight}px - 32px);
  display: flex;
  flex-direction: column;
  z-index: ${(props) => (props.isShowing ? 3 : 0)};
  overflow: auto;

  h2 {
    font-size: 38px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-bottom: 32px;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 26px;
    }
  }

  h3 {
    font-size: 28px;
    margin-bottom: 8px;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  label {
    font-weight: 600;
    margin: 24px 0 8px 0;
  }
`;

export const Inner = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 32px; */

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    /* align-items: flex-start; */
  }
`;

export const Button = styled.button`
  outline: none !important;
  border: solid 2px #da3c4c;
  background: transparent;
  color: #da3c4c;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 8px 24px;
  margin-left: 16px;
  transition: all 150ms ease-in-out;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito';
  letter-spacing: 0.2em;

  :hover {
    background: #da3c4c;
    color: white;
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 480px) {
    margin: 16px 0 0 0;
  }
`;
