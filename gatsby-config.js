const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    '@hummhive/gatsby-plugin-hummhive-react-web-data',
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,

    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: true,
      },
    },
    'gatsby-plugin-netlify',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hiveConfig`,
        path: path.resolve('config/hiveConfig'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`),
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/me/*`] },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
