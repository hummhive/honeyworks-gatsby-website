import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 12px 16px;
  position: relative;
  z-index: 3;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1 1 0;
  font-weight: 600;
  font-size: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 0;
`;

export const Button = styled.button`
  outline: none !important;
  border: solid 2px white;
  background: ${(props) => (props.color ? props.color : 'transparent')};
  color: ${(props) => (props.color ? '#FFF' : '#161F38')};
  padding: 8px 15px;
  margin: 0 4px;
  transition: all 150ms ease-in-out;
  font-weight: 600;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Work Sans";

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
