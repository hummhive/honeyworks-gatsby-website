import React from 'react';
import Copyright from './Copyright';
import Social from './Social';
import { FooterWrapper } from './styled';

const Footer = () => {
  return (
    <FooterWrapper className="container d-flex">
    <Social />
    <Copyright />
    </FooterWrapper>
  );
};

export default Footer;
