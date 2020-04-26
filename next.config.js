const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = 
withPlugins(
  [optimizedImages, {
    optimizeImagesInDev: true,
  }],
  {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
  }
)