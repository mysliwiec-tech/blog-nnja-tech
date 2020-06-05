const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
};

const optimizedImagesConfig = {
  optimizeImagesInDev: false,
}

module.exports = withPlugins([
  [optimizedImages, optimizedImagesConfig],
], nextConfig);