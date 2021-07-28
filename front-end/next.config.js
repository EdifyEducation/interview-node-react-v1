const webpack = require('webpack');
const fs = require('fs');
let dotenv = require('dotenv');
dotenv = require('dotenv').config();

// WITHOUT SSR
module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      // Whitelisting specific dynamic routes
      {
        source: '/users/:any*',
        destination: '/users/:any*',
      },
      // Rewrite everything to `pages/index`
      {
        source: '/:any*',
        destination: '/404',
      },
    ];
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(dotenv?.parsed));
    return config;
  },
};
