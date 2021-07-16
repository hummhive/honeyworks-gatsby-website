import styled from 'styled-components';

export const Container = styled.div`
  background: #ccd0d4;
  border-radius: 8px;
  padding: 24px;

  p {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #69727a;

    @media only screen and (min-width: 480px) and (max-width: 720px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
