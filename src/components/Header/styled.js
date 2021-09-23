import styled from 'styled-components';
import { animated } from 'react-spring';

export const HeaderContainer = styled(animated.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #EFEFEF;
  height: ${(props) => props.height}px;
  overflow: hidden;

  /* background: linear-gradient(
    135deg,
    rgba(120, 98, 255, 1) 0%,
    rgba(87, 166, 255, 1) 100%
  ); */
  /* background: linear-gradient(to left, #606c88, #3f4c6b); */
  /* background: linear-gradient(135deg, #162c36, #203a43, #2c5364); */
  /* background: linear-gradient(to left, #5d72a4, #334572); */
  background: #fff;
  color: #000;

  /* background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.1);
  color: #2b3a4d; */
`;

export const AnimationWrapper = styled(animated.div)`
  position: absolute;
  top: ${(props) => props.baseComponentHeight}px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  /* overflow-y: auto; */
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

export const Layout2 = styled.div`
img{
  width: 100%;
}
.logo-heading{
  text-align: center;
  font-weight: 600;
font-size: 20px;
}
.logo-subheading{
    text-align: center;
}
.logo-image {
	width: 120px;
	text-align: center;
	margin: auto;
	position: relative;
	margin-top: -61px;
}
.logo-image img{
  border: 4px solid #fff;
  border-radius: 40px;
}
`;

export const TextInput = styled.input`
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 600px;
  color: white;
  padding: 24px;
  margin: 8px 0;
  border-radius: 48px;
  font-size: 16px;
  font-weight: 600;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @media only screen and (max-width: 600px) {
    -webkit-appearance: none;
  }
  @media only screen and (max-width: 480px) {
    padding: 16px;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  outline: none !important;
  background: white;
  color: black;
  border-radius: 40px;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  transition: opacity 100ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  :hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  }

  @media only screen and (max-width: 480px) {
    padding: 16px;
    font-size: 14px;
  }
`;

export const Error = styled.div`
  padding: 16px 24px;
  font-size: 18px;
  border-radius: 32px;
  margin-bottom: 32px;
  background: #eb3a3a;
`;
