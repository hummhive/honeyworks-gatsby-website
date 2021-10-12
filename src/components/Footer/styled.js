import styled from 'styled-components';

export const FooterWrapper = styled.div`
  border-top: 1px solid #EFEFEF;
  justify-content: space-between;
  padding: 2rem 0 2.5rem 0;
  font-size: .875rem;

  .social-icons a{
    color: #000;
    padding-left: 10px;
  }

  .social-icons a:hover{
    color: #0057FF;
    padding-left: 10px;
  }

  @media only screen and (max-width: 480px) {
    display: block !important;
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
    text-align: center;

    .social-icons a {
    text-align: center;
    margin: 10px auto;
  }

  }

`;
