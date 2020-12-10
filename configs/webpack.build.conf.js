const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new ImageminWebpackPlugin({
      optipng: {
        optimizationLevel: 9,
      },
      pngquant: {
        quality: '95-100',
      },
      jpegtran: {
        progressive: true,
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
