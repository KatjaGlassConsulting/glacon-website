const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ... other configurations ...
  plugins: [
    // ... other plugins ...
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Generates a static HTML file with the report
      openAnalyzer: true, // Automatically opens the report in the default browser
      reportFilename: 'bundle-report.html', // The name of the report file
    }),
  ],
};