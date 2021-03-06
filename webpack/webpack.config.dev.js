const { merge } = require('webpack-merge');
const PATHS = require('./PATHS');
const parts = require('./webpack.parts');

require('dotenv').config();

const development = merge(
  {
    devServer: {
      port: 8080,
      // host: '192.168.6.32',
      compress: true,
      historyApiFallback: true,
      hot: true,
    },
  },
  parts.buildSetup('development'),
  parts.setMode('development'),
  parts.sourceMaps('eval-source-map'),
  parts.styleLoader({
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            path: PATHS.POSTCSS,
          },
        },
      },
    ],
  }),
);
module.exports = development;
