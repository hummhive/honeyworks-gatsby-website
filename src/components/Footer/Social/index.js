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
<a href={themeConfig.facebook}><FaFacebook /></a>
)}
{themeConfig?.twitter && (
<a href={themeConfig.twitter}><FaTwitter /></a>
)}
{themeConfig?.instagram && (
  <a href={themeConfig.instagram}><FaInstagram /></a>
  )}
  {themeConfig?.github && (
  <a href={themeConfig.github}><FaGithub /></a>
  )}
</div>
  );
};

Social.propTypes = {
  config: PropTypes.object,
};


export default Social;
