import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="d-flex social-icons">
Follow: <a href="#"><FaFacebook /></a>
<a href="#"><FaTwitter /></a>
  <a href="#"><FaInstagram /></a>
</div>
  );
};

export default Social;
