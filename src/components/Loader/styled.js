import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: ${props => props.display};
  align-items: center;
  justify-content: center;
  width: ${props => (props.display === 'inline' ? 'inherit' : '100%')};
  position: ${props => (props.fullscreen ? 'fixed' : 'relative')};
  top: ${props => (props.fullscreen ? '0' : 'inherit')};
  right: ${props => (props.fullscreen ? '0' : 'inherit')};
  bottom: ${props => (props.fullscreen ? '0' : 'inherit')};
  left: ${props => (props.fullscreen ? '0' : 'inherit')};
  background: ${props =>
    props.background || (props.fullscreen ? 'rgba(0,0,0,0.2)' : 'transparent')};
  z-index: 10000;
`;

const rotateAnim = keyframes`
  100% { transform: rotate(1080deg); }
`;

export const Spinner = styled.div`
  display: inline-block;
  animation-name: ${rotateAnim};
  animation-duration: 1400ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
