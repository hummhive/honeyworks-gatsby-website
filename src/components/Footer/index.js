import React from 'react';
import Copyright from './Copyright';
import PropTypes from 'prop-types';
import Social from './Social';
import { FooterWrapper } from './styled';

const Footer = ({config}) => {
  return (
    <FooterWrapper className="container d-flex">
    <Social config={config} />
    <Copyright />
    </FooterWrapper>
  );
};

Footer.propTypes = {
  config: PropTypes.object,
};

export default Footer;
