import styled from 'styled-components';
import { animated } from 'react-spring';

export const Button = styled(animated.button)`
  position: fixed;
  top: 16px;
  right: 16px;
  border: solid 2px white;
  outline: none !important;
  background: transparent;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-weight: 900;
  padding-top: 2px;
  transition: opacity 100ms ease-in-out;
  z-index: 10;

  :hover {
    opacity: 0.8;
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 14px;
    width: 35px;
    height: 35px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    width: 30px;
    height: 30px;
    padding-top: 0;
  }
`;
