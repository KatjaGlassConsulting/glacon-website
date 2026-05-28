const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  basePath: '/glacon-website/portal',
  output: 'export',
  /*webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-report.html',
        })
      );
    }
    return config;
  },
  typescript: {
    ignoreDevErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },*/
};
