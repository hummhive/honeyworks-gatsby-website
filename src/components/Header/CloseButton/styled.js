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

  :hover {
    opacity: 0.8;
  }
`;
