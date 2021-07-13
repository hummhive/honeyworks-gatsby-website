/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import Header from './Header';
import { useLocation } from '@reach/router';
import '../../static/bootstrap.min.css';
import '../../static/layout.css';

const Layout = ({ children }) => {
  const { state } = React.useContext(HummContext);
  const { isLoggedIn } = state;
  const location = useLocation();
  const dismissedGroups = window.localStorage.getItem(
    'dismissed-groups-header'
  );

  return (
    <>
      <Header
        initialStage={
          !isLoggedIn && location.pathname === '/' && !dismissedGroups ? 1 : 0
        }
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
