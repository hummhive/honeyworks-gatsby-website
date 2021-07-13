import styled from 'styled-components';

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
  z-index: 2;
  font-family: 'Nunito';
  padding: 24px 24px 0 24px;

  h2 {
    font-size: 38px;
    font-weight: 700;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 18px;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
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

export const Group = styled.div`
  padding: 24px 0;
  width: 250px;
  height: 300px;
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
    width: 225px;
    height: 275px;
  }

  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 250px;
  }
`;

export const UpperGroupContainer = styled.div`
  flex: 1 1 0;
  overflow: auto;
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
    font-size: 16px;
  }
`;

export const GroupDescription = styled.p`
  font-size: 15px;

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 11px;
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
  background: #4393e9;
  color: white;
  border-radius: 4px;
  width: 100%;
  transition: background 150ms ease-in-out;

  :hover {
    background: #2d77c6;
  }
`;
