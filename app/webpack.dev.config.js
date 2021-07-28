const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  devtool: 'inline-source-map',
};