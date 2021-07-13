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

  h2 {
    font-family: 'Nunito';
    font-weight: 700;
    margin: 0 0 0 12px;
  }

  *:first-child {
    margin-top: -4px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
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
`;
