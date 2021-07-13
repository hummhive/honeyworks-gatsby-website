import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 12px 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 0 1 auto;
  /* max-width: 50%; */

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Nunito';
    font-weight: 700;
    margin: 0 0 0 12px;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 24px;
      margin: 0 0 0 8px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 18px;
      margin: 0 0 0 8px;
    }
  }

  *:first-child {
    margin-top: -4px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const Button = styled.button`
  outline: none !important;
  border: solid 2px white;
  background: transparent;
  color: white;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 8px 32px;
  margin-left: 8px;
  transition: all 150ms ease-in-out;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito';
  letter-spacing: 0.2em;

  :hover {
    background: white;
    color: black;
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 12px;
    padding: 4px 16px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;
