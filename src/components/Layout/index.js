/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HummContext } from '@hummhive/gatsby-plugin-hummhive-react-web-data';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import GlobalStyle from './globalstyle.css.js';
import '../../../static/bootstrap.min.css';

const Layout = ({ children }) => {
  const bodyRef = React.useRef();
  const { state, actions } = React.useContext(HummContext);
  const { isLoggedIn } = state;
  const location = useLocation();

  const { hiveConfigJson: themeConfig } = useStaticQuery(graphql`
    query GetThemeSettings {
      hiveConfigJson {
        themeSettings {
          color
          logoImage {
            hash
            mimeType
          }
          bannerImage {
            hash
            mimeType
          }
          twitter
          facebook
          instagram
          github
        }
      }
    }
  `);

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
      <GlobalStyle {...themeConfig} />
      <Header bodyRef={bodyRef} config={themeConfig} />
      <main>{children}</main>
      <Footer config={themeConfig} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
