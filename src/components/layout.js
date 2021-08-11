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
import { navigate } from 'gatsby';
import '../../static/bootstrap.min.css';
import '../../static/layout.css';

const Layout = ({ children }) => {
  const bodyRef = React.useRef();
  const { state, actions } = React.useContext(HummContext);
  const { isLoggedIn } = state;
  const location = useLocation();

  const login = async (key) => {
    try {
      await actions.login(key);
    } catch (err) {
      console.error(err);
    }
  };

  // handle query param secret key login
  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    const secretKey = search.get('sk');

    if (secretKey && !isLoggedIn) login(secretKey);
    if (secretKey) navigate(location.pathname, { replace: true });
  }, [location.search]);

  const dismissedGroups =
    typeof window === 'object' &&
    window.localStorage.getItem('dismissed-groups-header');

  return (
    <div ref={bodyRef} style={{ overflow: 'hidden' }}>
      <Header
        bodyRef={bodyRef}
        initialStage={
          !isLoggedIn && location.pathname === '/' && !dismissedGroups ? 1 : 0
        }
      />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
