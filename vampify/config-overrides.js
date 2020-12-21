const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addWebpackPlugin,
  useEslintRc,
  addLessLoader,
} = require('customize-cra');

const Webpackbar = require('webpackbar');

module.exports = override(
  addWebpackPlugin(new Webpackbar({ color: '#325aa8' })),
  // useEslintRc('.eslintrc.js'),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-family': 'Inter, sans-serif',
        '@layout-header-background': '#002766',
        '@menu-collapsed-width': '60px',
      },
    },
  }),
);
