import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 12px 16px;
  position: relative;
  z-index: 3;
  width: 100%;
  box-shadow: 0 0 12px rgb(0 0 0 / 20%);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1 1 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 0;
`;

export const Button = styled.button`
  outline: none !important;
  border: solid 2px white;
  background: transparent;
  color: white;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 8px 0;
  margin-left: 8px;
  transition: all 150ms ease-in-out;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito';
  letter-spacing: 0.2em;
  width: 156px;

  :hover {
    background: white;
    color: black;
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 12px;
    width: 112px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    width: 100px;
    padding-top: 9px;
  }
`;
