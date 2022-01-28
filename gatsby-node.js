/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: { path: require.resolve('path-browserify') },
    },
  });
};

exports.onCreateBabelConfig = (p) => {
  if (process.env.NODE_ENV !== 'development') {
    p.actions.setBabelPlugin({
      name: '@babel/plugin-transform-regenerator',
      options: {},
    });
    p.actions.setBabelPlugin({
      name: '@babel/plugin-transform-runtime',
      options: {},
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/story/)) {
    page.matchPath = '/story/:id';

    // Update the page.
    createPage(page);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type HiveConfigJson implements Node {
      themeSettings: ThemeSettings
    }
    type ThemeSettings {
      color: String
      bannerImage: StaticImage
      logoImage: StaticImage
      facebook: String
      github: String
      instagram: String
      twitter: String
    }
    type StaticImage {
      hash: String
      mimeType: String
    }
  `;
  createTypes(typeDefs);
};
