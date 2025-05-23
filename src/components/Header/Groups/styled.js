import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  max-width: 600px;
  position: relative;
  color: #fff;
  z-index: 2;
  padding: 24px 24px 0 24px;

  h2 {
    font-size: 38px;
    color: #fff;
    font-weight: 700;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 26px;
    }
  }
`;

export const HiveDescription = styled(animated.p)`
  font-size: 18px;
  margin: 0;
  max-width: 600px;

  ${(props) =>
    props.showFull
      ? ''
      : `
      height: 3em;
      `};
  line-height: 1.5em;
  overflow: hidden;

  @media only screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

export const ShowMoreContianer = styled.div`
  display: inline-block;
  color: white;
  padding: 0 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 12px;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transition: opacity: 300ms ease-in-out;
`;

export const GroupsContainer = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 24px;
  overflow-x: auto;
  z-index: 3;
  margin: 0 auto;
`;

export const GroupCard = styled.div`
  padding: 24px 0;
  width: 300px;
  height: 250px;
  margin: 0 8px;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2), 6px 6px 30px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: white;
  color: black;

  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  :last-child {
    margin-right: 0;
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    width: 275px;
    height: 275px;
  }

  @media only screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

export const UpperGroupContainer = styled.div`
  flex: 1 1 0;
  overflow-y: scroll;
  padding: 0 24px;
  margin-bottom: 8px;
`;

export const LowerGroupContainer = styled.div`
  flex: 0 0 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`;

export const GroupTitle = styled.h3`
  font-size: 24px;
  text-align: center;

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const GroupDescription = styled.p`
  font-size: 16px;
  color: #363844;
  text-align: center;
  margin: 16px 0 0 0;

  @media only screen and (max-width: 720px) {
    font-size: 15px;
  }
`;

export const GroupCost = styled.p`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 8px 0;
`;

export const JoinGroupButton = styled.button`
  border: none;
  outline: none !important;
  background: #0057FF;
  color: white;
  border-radius: 4px;
  width: 100%;
  transition: background 150ms ease-in-out;

`;
