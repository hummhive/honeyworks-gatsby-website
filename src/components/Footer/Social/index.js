import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = ({config}) => {
  const themeConfig = config?.themeSettings;
  return (
    <div className="d-flex social-icons">
{themeConfig?.facebook && (
<a href={`https://facebook.com/${themeConfig.facebook}`}><FaFacebook /></a>
)}
{themeConfig?.twitter && (
<a href={`https://twitter.com/${themeConfig.twitter}`}><FaTwitter /></a>
)}
{themeConfig?.instagram && (
<a href={`https://instagram.com/${themeConfig.instagram}`}><FaInstagram /></a>
  )}
  {themeConfig?.github && (
  <a href={`https://github.com/${themeConfig.github}`}><FaGithub /></a>
  )}
</div>
  );
};

Social.propTypes = {
  config: PropTypes.object,
};


export default Social;
