import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = ({config}) => {
  return (
    <div className="d-flex social-icons">
{config.themeSettings.facebook && (
<a href={config.themeSettings.facebook}><FaFacebook /></a>
)}
{config.themeSettings.twitter && (
<a href={config.themeSettings.twitter}><FaTwitter /></a>
)}
{config.themeSettings.instagram && (
  <a href={config.themeSettings.instagram}><FaInstagram /></a>
  )}
  {config.themeSettings.github && (
  <a href={config.themeSettings.github}><FaGithub /></a>
  )}
</div>
  );
};

Social.propTypes = {
  config: PropTypes.object,
};


export default Social;
